import React, { useState } from 'react';
import Arrows from './Arrows';
import "../../sass/pages/arrows/_fullarrows.scss"

const FullArrows = ({title}) => {
    const [text, setText] = useState(true)
    const TextTitle = title ? (<h2>{title}</h2>) : ''
    return (
        <div className="second-element--arrow">
            {text && TextTitle}
            <Arrows />
        </div>
    )
}

export default FullArrows