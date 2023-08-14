import React, {useState, useContext} from 'react'
import "../Quiz/Quiz.css"
import MainMenu from './MainMenu'
import Game from './Game'
import EndScreen from './EndScreen'
import { QuizContext } from '../Helpers/Context'

const Quiz = () => {
  const [gameState, setGameState] = useState("menu")
  const [score, setScore] = useState(0)

  return (
    <div className='Quiz'>
 <h1>Quiz App</h1>
<QuizContext.Provider value={{gameState, setGameState, score, setScore}}>
 {gameState === "menu" && <MainMenu />}
 { gameState === "game" && <Game />}
 {gameState === "endScreen" && <EndScreen />}
 </QuizContext.Provider>
    </div>
  )
}

export default Quiz