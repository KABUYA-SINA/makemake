import React from 'react'
import '../../sass/pages/arrows/_arrows.scss';

const Arrows = () => {
    return (
        <div className="full-arows">
            <div className="arrow"></div>
            <div className="angle-arrow"></div>
            <div className="arrow-circle">
                <svg>
                    <circle
                        cx={'35px'}
                        cy={'40px'}
                        r={'20px'}
                        stroke={'#333'}
                        strokeWidth={1}
                        fill={'transparent'}
                    >
                    </circle>
                </svg>
            </div>
        </div>
    )
}

export default Arrows