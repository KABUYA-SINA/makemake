import React from 'react'

const Cards = ({id, image, alt}) => {
  return (
    <div key={id} className='card'>
      <img src={image} alt={alt}/>
    </div>
  )
}

export default Cards