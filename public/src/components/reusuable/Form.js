import React from 'react'
import PropTypes from 'prop-types'

const Form = (props) => {
  const { onSubmit, method, action, children} = props
  return (
    <form onSubmit={onSubmit} action={action} method= {method} className="needs-validation" noValidate>
      {children}
    </form>
  )
}

Form.propTypes = {
  onSubmit: PropTypes.func,
  method: PropTypes.string,
  action: PropTypes.string
}

export default Form
