import React from 'react'
import comillasSVG from '../../assets/icons/gl_comillas.svg'
import './UserStorie.css'

export function UserStorie ({ id, comment, user, date }) {
  return (
    <article className='User'>
      <img className='User-svg' src={comillasSVG} alt='Icono de comillas' />
      <p>{comment}</p>
      <section className='User-container'>
        <p className='User-name'>{user}</p>
        <p className='User-ocupation'>{date}</p>
      </section>
    </article>
  )
}
