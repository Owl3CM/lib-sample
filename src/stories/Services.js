import React from 'react'
import PropTypes from 'prop-types'
import './services.css'
import * as Lib from '../index_with_css'

export const Services = ({}) => {
  return <div></div>
}

Services.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

Services.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined
}
