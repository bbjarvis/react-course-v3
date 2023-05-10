import React, { useState } from 'react'

const Menu = ({ menu, menuItems }) => {
  return (
    <section className='section-center'>
      {menuItems.map((menuItem) => {
        if (menu === 'all') {
          return (
            <article className='menu-item' key={menuItem.id}>
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
            <article className='menu-item' key={menuItem.id}>
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
  )
}

export default Menu
