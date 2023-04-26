import questions from './data'

const App = () => {
  return (
    <main>
      <section className='container'>
        <h1>Questions</h1>
        <div className='question'>
          <h5>{questions[0].title}</h5>

          <p>{questions[0].info}</p>
        </div>
      </section>
    </main>
  )
}
export default App
