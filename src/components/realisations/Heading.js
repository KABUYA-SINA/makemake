import React from 'react';

const Heading = ({title, span, text, secondText}) => {
  return (
    <div className='heading'>
        <div className="heading-head">
            <h1>{title}</h1>
            <span className='heading-element'>{span}</span>
        </div>
        <div className="text--heading">
            <p>{text}</p>
            <p>{secondText}</p>
        </div>
    </div>
  )
}

export default Heading