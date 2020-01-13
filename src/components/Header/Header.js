import React from 'react'
import './Header.scss'

export default function Header() {
  return (
    <div className='header'>
      <p className='header__title'>Coctail DB</p>
      <img className='header__icone' src='./photos/cocktail header.svg' alt='cocktail header' />
    </div>
  )
}
