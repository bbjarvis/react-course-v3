import reviews from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const App = () => {
  return (
    <main>
      <article className='review'>
        <div className='review-hover'>
          <div className='img-container'>
            <img className='person-img' src={reviews[0].image}></img>
            <span className='quote-icon'>
              <FaQuoteRight />
            </span>
          </div>

          <h4 className='author'>{reviews[0].name}</h4>
          <p className='job'>{reviews[0].job}</p>
          <p className='info'>{reviews[0].text}</p>
        </div>
        <div>
          <button className='prev-btn'>
            <FaChevronLeft />
          </button>
          <button className='next-btn'>
            <FaChevronRight />
          </button>
        </div>
        <button className='btn'>
          <div className='btn-hover'>Surprise Me</div>
        </button>
      </article>
    </main>
  )
}
export default App
