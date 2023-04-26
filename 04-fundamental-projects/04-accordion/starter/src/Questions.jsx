import Question from './Question'

const Questions = ({ questions }) => {
  return (
    <>
      {questions.map((question) => {
        return <Question key={questions.id} {...questions} />
      })}
    </>
  )
}
export default Questions
