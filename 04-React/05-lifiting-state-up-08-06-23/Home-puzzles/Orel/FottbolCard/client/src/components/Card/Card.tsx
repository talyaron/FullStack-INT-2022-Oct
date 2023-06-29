import { useEffect, useState } from 'react'
import axios from 'axios'
import Alert from '../Alert/Alert'
import './Card.scss'
import {z} from "zod";


export const IPlayerZodSchema = z.object({
    name: z.string(),
    srcHappy: z.string(),
    srcAngry: z.string(),
    speed: z.number(),
    clicked: z.boolean(),
    _id:z.string()
  });


  export type IPlayer = z.infer<typeof IPlayerZodSchema>
// export interface IPlayer {
//     name: string,
//     srcHappy: string,
//     srcAngry: string,
//     speed: string,
//     clicked: boolean,
//     _id: string
// }

const Card = () => {
    //useState
    const newStylePosition = { top: newPosition()[0], left: newPosition()[1] }
    const [players, setPlayers] = useState<IPlayer[] | []>([])
    const [player, setPlayer] = useState<IPlayer | null>(null)
    const [position, setPosition] = useState<object>({ newStylePosition })
    const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
    const [display, setDisplay] = useState<object>({ display: "none" })

    //useEffect

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get('/api/players/get-players')
                if (!data) throw new Error("no found players data API")
                const { players } = data;
                console.log(players)

                IPlayerZodSchema.array().parse(players);

                setPlayers(players)
                const randomIndex = Math.floor(Math.random() * players.length)
                setPlayer(players[randomIndex])
                startMoving()
            } catch (error: any) {
                console.error({ success: false, message: error.message })
            }
        })()
    }, [])

    useEffect(() => {
        try {
            const randomIndex = Math.floor(Math.random() * players.length)
            if (!players) throw new Error("no found players")
            const newPlayer = players[randomIndex]
            setPlayer(newPlayer)
        } catch (error) {
            console.error(error)
        }
    }, [player])

    //functions

    function newPosition(): string[] {
        const top = `${Math.floor((Math.random() * 80) + 40) - 40}%`
        const left = `${Math.floor((Math.random() * 80) + 40) - 40}%`
        return [top, left]
    }


    function startMoving() {
            const id = setInterval(() => {
                setPosition({ top: newPosition()[0], left: newPosition()[1] });
                console.log("moving")
              }, 1500);
              setIntervalId(id);

   
      }
    
    //   function stopMoving() {
    //     if (intervalId) {
    //       clearInterval(intervalId);
    //       setIntervalId(null);
    //     }
    //   }
     


    // handler functions
    function handleClickCard(id: string) {
        try {
            if (players) {
                const newPlayers = [...players];
                const playerIndex = newPlayers.findIndex(p => p._id === id);
                newPlayers.splice(playerIndex, 1);
                setTimeout(() => {
                    setPlayer(null)
                    setDisplay({
                        display: "none"
                    })
                }, 1500),
                    setDisplay({
                        display: "block"
                    })
            }
        } catch (error) {
            console.error(error)
        }
    }


    return (
        player ? <div className='card-container'>
            <Alert styles={display} message='Aouutch' srcAngry={player.srcAngry} />
            <img
                key={player._id}
                style={position}
                className='card-container__img'
                src={player.srcHappy}
                alt={player.name}
                onClick={() => { handleClickCard(player._id) }} />

        </div> : null
    )
}

export default Card
