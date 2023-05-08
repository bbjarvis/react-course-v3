import React, { useState } from 'react'
import items from './data'
const allCategories = ['all', ...new Set(items.map((item) => item.category))]

const App = () => {
  const [categories, setCategories] = useState(allCategories)
  const [menuItems, setMenuItems] = useState(items)
  return (
    <main>
      <section classname='menu'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='title-underline'></div>
        </div>
        <container className='btn-container'>
          {categories.map((category) => {
            return <button className='btn'>{category}</button>
          })}
        </container>
      </section>
      <section className='section-center'>{menuItems[0].title}</section>
    </main>
  )
}
export default App
