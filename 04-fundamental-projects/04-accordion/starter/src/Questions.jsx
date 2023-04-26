import Question from './Question'

const Questions = ({ questions }) => {
  return (
    <>
      {questions.map((question) => {
        return <Question key={question.id} {...question} />
      })}
    </>
  )
}
export default Questions
