import React, { useState } from 'react'
import MenuItem from './MenuItem'

const Menu = ({ menu, menuItems }) => {
  return (
    <section className='section-center'>
      {menuItems.map((menuItem) => {
        if (menu === 'all') {
          return <MenuItem menuItem={menuItem} key={menuItem.id} />
        }
        if (menu === menuItem.category) {
          return <MenuItem menuItem={menuItem} key={menuItem.id} />
        }
      })}
    </section>
  )
}

export default Menu
