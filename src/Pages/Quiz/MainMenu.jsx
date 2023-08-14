import React, {useContext} from 'react'
import { QuizContext } from '../Helpers/Context'
import quizImage from './quiz.jpg'
const MainMenu = () => {
 const {gameState, setGameState}= useContext(QuizContext)
  return (
    <div className='Menu'>
      <img src={quizImage} alt=""  className='quizImg'/>
     <button onClick={() => {setGameState("game")}}>Start Game</button>
    </div>
  )
}

export default MainMenu