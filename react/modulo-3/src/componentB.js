import React from 'react'
import PropTypes from 'prop-types'
import ComponentA from './componentA'

function componentB({contacto}) {

  return (
    <div>componentB</div>
  )
}

componentB.propTypes = {
    contacto: PropTypes.instanceOf(ComponentA)
}

export default componentB
