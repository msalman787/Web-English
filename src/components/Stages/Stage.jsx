import React from 'react'
import './Stage.css'

export function Stage (props) {
  const numberWithPads = () => {
    if (props.number < 10) return `0${props.number}`
    return props.number
  }
  return (
    <article className='Stage'>
      <p className='Stage-p'>{numberWithPads()}</p>
      <main className='Stage-container'>
        <h3>{props.title}</h3>
        {props.children}
      </main>
      <footer className='Stage-footer'>
        <a className='Stage-a' href='https://gringolandiaeng.samcart.com/products/verb-tree-learning-system-basic-1/' target='no_blank'>Lo quiero </a>
        <span>{'>'}</span>
      </footer>
    </article>
  )
}
