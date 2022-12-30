import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

export default function H1Text({quote, author, color}) {
  const textColor = {
    color: color,
  }

  return (
    <div style={ textColor }>
        <h1 className={ `font-josefin font-medium text-2xl mb-3` }><span><FontAwesomeIcon icon={ faQuoteLeft } size="lg"/></span> { quote }</h1>

        <p className='mb-6 text-right font-normal'> - { author }</p>
    </div>
  )
}
