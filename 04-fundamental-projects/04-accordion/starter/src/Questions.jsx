import Question from './Question'

const Questions = ({ questions, activeId, toggleQuestion }) => {
  return (
    <>
      {questions.map((question) => {
        return (
          <Question
            key={question.id}
            {...question}
            activeId={activeId}
            toggleQuestion={toggleQuestion}
          />
        )
      })}
    </>
  )
}
export default Questions
