import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import React, { useState } from 'react'

const Question = ({ id, title, info, activeId, toggleQuestion }) => {
  const isActive = id === activeId
  return (
    <div className='question'>
      <header>
        <h5>{title}</h5>
        <button className='question-btn' onClick={() => toggleQuestion(id)}>
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isActive ? <p>{info}</p> : <></>}
    </div>
  )
}

export default Question
