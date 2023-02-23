import { useState } from 'react'

const ShortCircuitOverview = () => {
  // falsey?
  const [text, setText] = useState('')
  // truthey
  const [name, setName] = useState('susan')

  const codeExample = text || 'hello world'

  return (
    <div>
      <h4>Falsey OR : {text || 'hello world'}</h4>
      <h4>Falsey AND : {text && 'hello world'}</h4>
      <h4>Falsey OR : {name || 'hello world'}</h4>
      <h4>Falsey AND : {name && 'hello world'}</h4>
      {codeExample}
    </div>
  )
}
export default ShortCircuitOverview
