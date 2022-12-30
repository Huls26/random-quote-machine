import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faTumblr } from '@fortawesome/free-brands-svg-icons';

export default function Btn({element, des, color}) {
  const isText = !des;

  function textIcon(element, des = "t") {
    const text = "t";
    const isText = (des === text);

    if (isText) {
      return element
    } else {
      return <a href="https://twitter.com/intent/tweet" target="_blank"><i><FontAwesomeIcon icon={ element } size="1x" inverse /></i></a>
    }
  }

  const bgColor = {
    backgroundColor: color ? color : "",
  }

  return (
    <button id={ isText ? "next-quote" : "" } style={ bgColor } className={ `px-2 py-1 text-white font-normal rounded min-w-[32px] hover:opacity-80` }>{ textIcon(element, des) }</button>
  )
}
