import React, { useContext } from 'react'
import { Questions } from '../Helpers/QuestionPart'
import { QuizContext } from '../Helpers/Context'


const EndScreen = () => {
  const {score, setScore, setGameState}= useContext(QuizContext)

  const restartGame = () => {
    setScore(0)
    setGameState("menu")
  }
  return (
    <div className='endscreen'>
          <h1>Game Finished</h1>
          <h3>{score}/ {Questions.length}</h3>
          <button onClick={restartGame} className='restart'>Restart Game</button>
    </div>
  )
}

export default EndScreen