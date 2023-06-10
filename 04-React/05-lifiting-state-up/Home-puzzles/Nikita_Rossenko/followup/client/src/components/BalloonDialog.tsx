/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios'

const BalloonDialog = () => {

    async function addBalloonToDB(e:any){
        try {
            e.preventDefault()
            const balloonImg = e.target.balloonImg.value
            const addBalloon = await axios.post("/api/add-Balloon", {balloonImg})

            console.log(addBalloon)
            
        } catch (error) {
            console.error(error)
        }
    }

  return (
    <div>
        <form onSubmit={addBalloonToDB}>
            <input type="text" name="balloonImg" placeholder='Ballon Image URL' />
            <input type="submit" />
        </form>
    </div>
  )
}

export default BalloonDialog