import questions from './data'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import React, { useState } from 'react'

const Question = ({ id, title, info }) => {
  const [showInfo, setShowInfo] = useState(false)
  return (
    <div className='question'>
      <header>
        <h5>{title}</h5>
        <button className='question-btn' onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo ? <p>{info}</p> : <></>}
    </div>
  )
}

export default Question
