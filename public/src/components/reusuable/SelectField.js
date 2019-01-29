import React, { Fragment } from 'react'
import PropTypes from 'prop-types'


const SelectField = (props) => {
  const {
    name, defValue, onChange, feedback, value, optVal
  } = props
  const options = (Val) => {
    if (Val) {
      return Val.map((opt, index) => {
        return <option key={index} value={opt} >{opt} </option>
      })
    }
  }
  return (
    <Fragment>
      <label htmlFor={name}>{name}</label>
      <select value={value} onChange={onChange} name={name} className="custom-select d-block w-100" id={name} required >
        <option value="">{defValue}</option>
        {options(optVal)}
      </select>
      <div className="invalid-feedback">
        {feedback}
      </div>
    </Fragment>
  )
}

SelectField.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  feedback: PropTypes.string,
  defValue: PropTypes.string,
  value: PropTypes.string,
}
SelectField.defaultProps = {
  feedback: 'This Field is required',
  defValue: 'Choose...'
}
export default SelectField;
