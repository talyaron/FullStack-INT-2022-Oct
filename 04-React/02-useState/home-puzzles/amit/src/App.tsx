import { useState } from 'react'
import './App.css'
import { v4 } from 'uuid'
//componenets import//
import User from './components/user/user'

function App() {
  const users: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
  const [userIndex, setUserIndex] = useState(-1)
  const [colors, setColors] = useState([""])


  function handlePickRandomUser() {
    try {
      setUserIndex((userIndex) => {
        const randomUserIndex = Math.floor(Math.random() * users.length)
        userIndex = randomUserIndex

        return userIndex
      })
    } catch (error) {
      console.error(error)
      return null
    }
  }

  function handleRandomColors() {
    try {
      setColors((colors) => {
        const randomColors: string[] = []
        for (let i = 0; i < users.length; i++) {
          const _randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16)
          randomColors.push(_randomColor)
        }
        colors = randomColors
        return colors
      })
    } catch (error) {
      console.error(error)
      return null
    }
  }

  return (
    <div>
      <button onClick={handleRandomColors}>randomize colors</button>
      <button onClick={handlePickRandomUser}>choose randmon user</button>
      <div className='usersWrapper'>{
        users.map((user, i) => {
          i++
          if (users[userIndex] === user) {
            return <User key={v4()} name={user} isWinner={true} backColor={colors[users.length - i]} />
          } else {
            return <User key={v4()} name={user} isWinner={false} backColor={colors[users.length - i]} />
          }
        })
      }
      </div>
    </div>
  )
}

export default App
