import React, { useState } from 'react';
import Vector from '../images/collapse_img.webp';
import styled from "styled-components/";
import '../sass/pages/_collapse.scss';
import '../sass/base/_collapse-typo.scss';

const Collapse = ({title, text}) => {
    const [rotate, setRotate] = useState(true)
    const [textAppear, setAppear ] = useState(false)

    const handleClick = () => {
        setRotate((prevState) => (!prevState ))
        setAppear((prevState) => (!prevState ))
    }

    return (
        <div className='collapse'>
            <section>
                <h3>{title}</h3>
                <IconImageWrapper rotate={+rotate} src={Vector} alt='flèche' onClick={handleClick} />
            </section>
                {textAppear && <span className="boxes-childs">{text}</span>}
        </div>
    )
}

const IconImageWrapper = styled.img`
transform: rotate(0deg);
overflow: hidden;
transition: all 0.3s ease-out;
${({ rotate }) => rotate && `transform: rotate(180deg)`};
`

export default Collapse;