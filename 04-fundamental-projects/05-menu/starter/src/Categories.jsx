import React, { useState } from 'react'

const Categories = ({ categories, setMenu }) => {
  return (
    <section>
      <div className='title'>
        <h2>Our Menu</h2>
        <div className='title-underline'></div>
      </div>
      <article className='btn-container'>
        {categories.map((category, index) => {
          return (
            <button
              className='btn'
              onClick={() => setMenu(category)}
              key={index}
            >
              {category}
            </button>
          )
        })}
      </article>
    </section>
  )
}

export default Categories
