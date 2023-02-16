import './services.css'
import React from 'react'
import PropTypes from 'prop-types'
import { Sample } from '../index'

export const Services = ({}) => {
  return (
    <div className='wrapper'>
      <h1 className='text-center'>Services</h1>
      <Sample />
      <p></p>
    </div>
  )
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
