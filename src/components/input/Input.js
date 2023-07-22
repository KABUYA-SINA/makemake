import React from 'react'

const Input = (props) => {

    const{onClick, label, ...inputProps} = props

    return (
        <React.Fragment>
            <input
                {...inputProps}
                // onClick={onClick}
            />
            <label htmlFor={props.label}>{label}</label>
        </React.Fragment>
    )
}

export default Input;