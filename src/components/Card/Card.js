import React from 'react'
import './Card.scss'

export default function Card(props) {
  const {id, img, title} = props;
  return (
    <div className='card'>
      <img className='card__img' src={img} alt={title} />
      <p className='card__title'>{title}</p>
    </div>
  )
}
