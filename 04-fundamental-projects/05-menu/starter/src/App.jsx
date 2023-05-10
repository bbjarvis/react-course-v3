import React, { useState } from 'react'
import items from './data'
import Categories from './Categories'
const allCategories = ['all', ...new Set(items.map((item) => item.category))]

const App = () => {
  const [categories, setCategories] = useState(allCategories)
  const [menuItems, setMenuItems] = useState(items)
  const [menu, setMenu] = useState('all')
  console.log(menu)

  return (
    <main>
      <Categories categories={categories} setMenu={setMenu} />

      <section className='section-center'>
        {menuItems.map((menuItem) => {
          if (menu === 'all') {
            return (
              <article className='menu-item'>
                <img src={menuItem.img} className='img'></img>
                <div className='item-info'>
                  <header>
                    <h5>{menuItem.title}</h5>
                    <span className='item-price'>{menuItem.price}</span>
                  </header>
                  <p className='item-text'>{menuItem.desc}</p>
                </div>
              </article>
            )
          }
          if (menu === menuItem.category) {
            return (
              <article className='menu-item'>
                <img src={menuItem.img} className='img'></img>
                <div className='item-info'>
                  <header>
                    <h5>{menuItem.title}</h5>
                    <span className='item-price'>{menuItem.price}</span>
                  </header>
                  <p className='item-text'>{menuItem.desc}</p>
                </div>
              </article>
            )
          }
        })}
      </section>
    </main>
  )
}
export default App
