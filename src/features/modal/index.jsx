import React from 'react'
import QuoteDisplay from './components/QuoteDisplay'
import BtnSection from './components/BtnSection'

export default function Modal({author, quote, color}) {
  return (
    <article className='bg-white p-6 rounded m-10 min-w-[20em]'>
      <QuoteDisplay author={ author } quote={ quote } color={ color } />
      <BtnSection color={ color } />
    </article>
  )
}
