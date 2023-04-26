import questions from './data'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
const Questions = () => {
  return (
    <div className='question'>
      <header>
        <h5>{questions[0].title}</h5>
        <button className='question-btn'>
          <AiOutlinePlus />
        </button>
      </header>
      <p>{questions[0].info}</p>
    </div>
  )
}
export default Questions
