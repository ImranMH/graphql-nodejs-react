import React, {Fragment} from 'react'
import PropTypes from 'prop-types'


const InputField = (props) => {
  const {
    name, type, placeholder, onChange, feedback, value
  } = props
  return (
    <Fragment>
      <label htmlFor={name}>{name} <span className="text-muted">(Optional)</span></label>
      <input type={type} value={value} onChange={onChange} className="form-control" name={name} id={name} placeholder={placeholder} />
      <div className="invalid-feedback">
        {feedback}
      </div>
    </Fragment>
  )
}

InputField.propTypes = {
 
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  feedback: PropTypes.string,

}
InputField.defaultProps = {
  type: 'text',
  feedback: 'This Field is required'
}
export default InputField;
