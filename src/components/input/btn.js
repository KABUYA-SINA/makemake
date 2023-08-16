import React from 'react';
import { Link } from 'react-router-dom';
import '../../sass/pages/inputs/_btn.scss';

const btn = ({title, link}) => {
    return (
        <Link to={link} className='parent-btn'>
            <button className='btn'>
                <span className="btn-line">
                    {title}
                </span>
            </button>
        </Link>
    )
}

export default btn;