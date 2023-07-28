import React from 'react'

const Input = (props) => {

    const{onChange, label, ...inputProps} = props

    return (
        <div className='form-group--input' >
            <input
                {...inputProps}
                onChange={onChange}
            />
            <label htmlFor={props.label} className='label-input'>{label}</label>
        </div>
    )
}

export default Input;