import React, { useState } from 'react'

const MenuItem = ({ menuItem }) => {
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

export default MenuItem
