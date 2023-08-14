import React, {useState, useContext} from 'react'
import { QuizContext } from '../Helpers/Context'
import {Questions} from '../Helpers/QuestionPart'

 
const Game = () => {
 const {score, setScore, setGameState} = useContext(QuizContext)
 const [currQuestion, setQcurrQuestion]= useState(1)
 const [optionChosen, setOptionChosen]= useState("")

 const nextQuestion = () => {
  if(Questions[currQuestion].answer == optionChosen){
    setScore(score + 1)
  }
  setQcurrQuestion(currQuestion + 1)
 }
 const finishGame = () => {
  if(Questions[currQuestion].answer == optionChosen){
    setScore(score + 1)
  }
  setGameState("endScreen")
 }
  return (
    <div className='game'>
     <h1>{Questions[currQuestion].prompt}</h1>
     <div className="questions">
      <button onClick={() => setOptionChosen("A")}>{Questions[currQuestion].optionA}</button>
      <button onClick={() => setOptionChosen("B")}>{Questions[currQuestion].optionB}</button>
      <button onClick={() => setOptionChosen("C")}>{Questions[currQuestion].optionC}</button>
      <button onClick={() => setOptionChosen("D")}>{Questions[currQuestion].optionD}</button>
     </div>
{currQuestion == Questions.length -1 ? (
  <button className='lastPart' onClick={finishGame}>Finish Game</button>
   ): (
    <button onClick={nextQuestion} className='next'>Next Question</button>
  
)}
    </div>
  )
}

export default Game