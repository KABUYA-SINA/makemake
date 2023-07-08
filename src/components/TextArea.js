import React from 'react'

export const TextArea = (props) => {
  return (
    <div className='form-group'>
      <textarea
        id="textarea"
        name="textarea"
        maxLength={200}
        rows="10" cols="50"
        className="form-input"
        placeholder={props.placeholder}
        onChange={(e) => props.setTextAreaValues(e.target.value)}
        value={props.value}
        >
      </textarea>
    </div>
  )
}
export default TextArea;