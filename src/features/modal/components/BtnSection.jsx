import React from 'react'
import Btn from '@components/btn/Btn';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faTumblr } from '@fortawesome/free-brands-svg-icons';

export default function BtnSection({color}) {
  
  return (
    <div id="btn-container" className='flex justify-between'>
      
      <div id="icon-container" className='flex space-x-1'>
        <Btn color={ color } element={ faTwitter } des={ "i" } />
        <Btn color={ color } element={ faTumblr } des={ "i" } />
      </div>
     
      <Btn color={ color } element="New quote"/>
    </div>
  )
}
