import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Balloon from "./balloon/balloon";

export interface BalloonInterface {
  _id: string,
  color: string,
  status: string,
  balloonIndex: number,
}

function App() {
  const [gamestart, setGameStart] = useState(false)
  const [balloons, setBalloons] = useState<Array<BalloonInterface>>([])
  const [balloonStatus, setBalloonStatus] = useState("init")
  const [score, setScore] = useState(0)

  async function handleStartGame(length:number) {
    try {
      await axios.post("/api/balloons/add-balloons", { length })

      setGameStart((gamestart) => !gamestart)

    } catch (error) {
      console.error(error)
      return null
    }
  }


  const handleShoot = async (balloonId: string) => {
    try {
      setBalloonStatus((balloonStatus) => {
        balloonStatus = "popped"
        return balloonStatus
      })
      await axios.patch("/api/balloons/update-balloon-status", { balloonId, balloonStatus })
      // await axios.delete(`/api/balloons/delete-balloon/${balloonId}`)
      // setBalloonVisible((balloonVisible) => !balloonVisible)
    } catch (error) {
      console.error(error)
      return null
    }
  }

  const handleRestartGame = async () => {
    try {
      await axios.delete("/api/balloons/delete-all-balloons")

    } catch (error) {
      console.error(error)
      return null
    }
  }



  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/api/balloons/get-balloons")
      const { balloonsDB } = data
      setBalloons((balloons) => {
        balloons = balloonsDB
        return balloons
      })
    })()
  }, [balloonStatus, handleShoot])

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/api/balloons/get-balloons")
      const { balloonsDB } = data
      console.log("balloons", balloons)
      setBalloons((balloons) => {
        balloons = balloonsDB
        return balloons
      })
      const { ok } = data;
      console.log(ok)
    })()
  }, [gamestart])


  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/api/balloons/get-popped-balloons")
      const { poppedBalloonsDB } = data
      setScore((score) => {
        score = poppedBalloonsDB.length
        return score
      })
    })()
  }, [balloonStatus, handleShoot, handleRestartGame])



  return (
    <div>
      <div className="container">
        <h1>balloons poppping</h1>
        <button onClick={handleRestartGame}>restart game</button>
        <h2>score: {score}</h2>
        <div className="buttonsWrapper">
          <button onClick={() =>handleStartGame(2)}>release 2 balloons</button>
          <button onClick={() =>handleStartGame(5)}>release 5 balloons</button>
          <button onClick={() =>handleStartGame(10)}>release 10 balloons</button>
        </div>
        
        <div className="frame">
          {balloons.map((balloon: BalloonInterface, i: number) => {
            i++
            return <Balloon onPress={() => handleShoot(balloon._id)} key={balloon._id} color={balloon.color} status={balloon.status} balloonIndex={i} ballonsLength={balloons.length} />
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
