import React from 'react'

const withClass = (Component, className) => {
  /* return props => {
    return (
      <div className={className}>
        <Component {...props} />
      </div>
    )
  } */

  const WrapperComponent = (props) => {
    return (
      <div className={className}>
        <Component {...props} />
      </div>
    )
  }

  return WrapperComponent
}

export default withClass