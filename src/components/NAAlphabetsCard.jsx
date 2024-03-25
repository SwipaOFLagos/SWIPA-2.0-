import React from 'react'
import "../css/NAAlphabets.css"

const AlphabetsCard = ({ alphabet }) => {
  return (
    <div>
      {alphabet.map((alphabet, index) => {
        return (
          <span key={index}>
            <button className="btn-brand">
              {alphabet.toUpperCase()}
            </button>
          </span>
        )
      })}
    </div>
  )
}
export default AlphabetsCard


export function Alphabets() {
  const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

  return (
    <div>
      <AlphabetsCard alphabet={alphabets} />
    </div>
  )
}

