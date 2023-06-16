import React,  { useState } from 'react'
import '../sass/pages/inputs/_form.scss';

export const FormInputs = (props) => {
    const [focused, setFocused] = useState(false)
    const {onChange, errorMessage, ...inputProps} = props
    function handleFocus(e){
        setFocused(true)
    }
  return (
    <div className='form-group'>
      {/* <label htmlFor={props.label}>{label}</label> */}
        <input
          {...inputProps} onChange={onChange}
          onBlur={handleFocus}
          focused={focused.toString()}
        />
        <span className='alert'>{errorMessage}</span>
    </div>
  )
}
export default FormInputs