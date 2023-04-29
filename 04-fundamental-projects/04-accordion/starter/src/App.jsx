import Questions from './Questions'
import data from './data'
import React, { useState } from 'react'
const App = () => {
  const [questions, setQuestions] = useState(data)
  const [activeId, setActiveId] = useState(null)

  const toggleQuestion = (id) => {
    const newActiveId = id === activeId ? null : id
    setActiveId(newActiveId)
  }

  return (
    <main>
      <section className='container'>
        <h1>Questions</h1>
        <Questions
          questions={questions}
          activeId={activeId}
          toggleQuestion={toggleQuestion}
        />
      </section>
    </main>
  )
}
export default App
