import React from 'react'
import classes from './CoreAdminLayout.scss'
import '../../styles/core.scss'

export const CoreLayout = ({ children }) => (

  <div className={classes.container}>
      {children}
  </div>
)

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout
