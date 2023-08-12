import React from 'react';
import '../../sass/base/_heading-typo.scss';


const Heading = ({title, span, text, secondText}) => {
  return (
    <div className='heading'>
        <div className="heading-head">
            <div className='heading-head--text'>
              <h1>{title}</h1>
              <span className='heading-element'>{span}</span>
            </div>
        </div>
        <div className="text--heading">
            <div className='copy-heading'>
            </div>
            <p>{text}</p>
            <p>{secondText}</p>
        </div>
    </div>
  )
}

export default Heading