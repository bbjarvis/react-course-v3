import Questions from './Questions'
import questions from './data'
import React, { useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

const App = () => {
  const [showInfo, setShowInfo] = useState(false)

  const showQInfo = (id) => {
    const showNow = 5
  }
  return (
    <main>
      <section className='container'>
        <h1>Questions</h1>

        {questions.map((question) => {
          return (
            <div className='question'>
              <header>
                <h5>{question.title}</h5>
                <button
                  className='question-btn'
                  onClick={() => setShowInfo(question.id)}
                >
                  {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
              </header>
              {showInfo ? <p>{question.info}</p> : <></>}
            </div>
          )
        })}
      </section>
    </main>
  )
}
export default App

// <Questions questions={questions} />
//
