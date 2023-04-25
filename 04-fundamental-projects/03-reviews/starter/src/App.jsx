import { useState } from 'react'
import reviews from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const App = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = reviews[index]
  const numCheck = (number) => {
    return number > reviews.length - 1 ? 0 : number
  }
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1
      return numCheck(newIndex)
    })
  }
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1
      return numCheck(newIndex)
    })
  }

  const randPerson = () => {
    let randomNumber = Math.floor(Math.random() * reviews.length)
    randomNumber === index
      ? (randomNumber = index + 1)
      : setIndex(numCheck(randomNumber))
  }

  return (
    <main>
      <article className='review'>
        <div className='review-hover'>
          <div className='img-container'>
            <img className='person-img' src={image}></img>
            <span className='quote-icon'>
              <FaQuoteRight />
            </span>
          </div>

          <h4 className='author'>{name}</h4>
          <p className='job'>{job}</p>
          <p className='info'>{text}</p>
        </div>
        <div className='btn-container'>
          <button className='prev-btn' onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className='next-btn' onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>

        <button className='btn btn-hipster' onClick={randPerson}>
          Surprise Me
        </button>
      </article>
    </main>
  )
}
export default App
