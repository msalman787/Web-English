import React from 'react'
import './Stage.css'

export function Stage (props) {
  return (
    <article className='Stage'>
      <section>
        <span>{props.number}</span>
        <h3>{props.title}</h3>
        {props.children}
        <a>Lo quiero {'>'}</a>
      </section>
    </article>
  )
}
