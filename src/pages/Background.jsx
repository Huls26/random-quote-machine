import React, { useEffect, useState } from 'react'
import Modal from "@features/modal/"
import { Result } from 'postcss'

export default function Background() {
  const defaultData = {
      color: "ultraViolet",
      author: "",
      quote: "Loading...",
  }
  const colors = ["brown", '#795548', '#34568B', '#FF6F61', '#6B5B95', '#88B04B', '#F7CAC9'];
  const [quotesData, setQuotesData] = useState(() => ({ quotes: [], display: defaultData }));

  useEffect(() => {
    const isData = quotesData.quotes.length;

    if (!isData) {
      fetch("https://type.fit/api/quotes")
      .then(function(response) {
        return response.json();
      })
      .then(function(quotes) {
        setState(quotes);
      })
      .catch(error => console.log(error));
    }
  }, [])

  function randomQuotes(quotes) {
    const quotesLength = quotes.length;
    const random = Math.floor(Math.random() * quotesLength);
    const quotePick = quotes[random]; 

    return {color: randomColors(colors), author: quotePick.author, quote: quotePick.text,}
  }

  function randomColors(colors) {
    const colorsLength = colors.length;
    const random = Math.floor(Math.random() * colorsLength);
    const colorPick = colors[random]; 

    return colorPick
  }

  function setState(quotes) {
    setQuotesData(prevValue => ({
      ...prevValue,
      quotes: quotes,
      display: randomQuotes(quotes), 
    }));
  }

  // event
  function nextQuote() {
    setState(quotesData.quotes)
  }

  const { color, quote, author } = quotesData.display;
  const bgColor = {
    backgroundColor: quotesData.display.color ? quotesData.display.color : "",
  }

  // instead of prop drilling called next-quote directly then add event
  // I dont recommend this method but it works
  // instead of prop drilling the data I think using context is much better
  const next = document.querySelector("#next-quote");
  if (next) {
    next.addEventListener("click", nextQuote);
  }
 
  return (
    <div style={ bgColor } className={ `font-bold flex justify-center items-center h-screen min-w-[320px]` }>
      <Modal color={ quotesData.display.color } quote={ quote } author={ author } />
    </div>
  )
}
 