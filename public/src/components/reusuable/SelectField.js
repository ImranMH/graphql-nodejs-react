import React, { Fragment } from 'react'
import PropTypes from 'prop-types'


const SelectField = (props) => {
  const {
    name, defValue, onChange, feedback, value
  } = props
  const options = (optVal) => {
    if (optVal) {
      return optVal.map((opt, index) => {
        return <option key={index} value={opt} >{opt} </option>
      })
    }
  }
  return (
    <Fragment>
      <label htmlFor={props.name}>{props.name}</label>
      <select value={props.value} onChange={props.onChange} className="custom-select d-block w-100" id={props.name} required >
        <option value="">{props.defValue}</option>
        {options(props.optVal)}
      </select>
      <div className="invalid-feedback">
        {props.feedback}
      </div>
    </Fragment>
  )
}

SelectField.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  feedback: PropTypes.string,
  defValue: PropTypes.string,
  feedback: PropTypes.string,
}
SelectField.defaultProps = {
  feedback: 'This Field is required',
  defValue: 'Choose...'
}
export default SelectField;
