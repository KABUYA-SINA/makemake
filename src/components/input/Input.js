import React from 'react'

const Input = (props) => {

    const{onClick, label, ...inputProps} = props

    return (
        <div className='form-group--input'>
            <input
                {...inputProps}
                // onClick={onClick}
            />
            <label htmlFor={props.label}>{label}</label>
        </div>
    )
}

export default Input;