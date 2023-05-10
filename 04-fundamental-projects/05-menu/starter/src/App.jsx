import React, { useState } from 'react'
import items from './data'
import Categories from './Categories'
import Menu from './Menu'
const allCategories = ['all', ...new Set(items.map((item) => item.category))]

const App = () => {
  const [categories, setCategories] = useState(allCategories)
  const [menuItems, setMenuItems] = useState(items)
  const [menu, setMenu] = useState('all')

  return (
    <main>
      <Categories categories={categories} setMenu={setMenu} />
      <Menu menu={menu} menuItems={menuItems} />
    </main>
  )
}
export default App
