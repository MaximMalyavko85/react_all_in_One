import React from 'react'


/* export function Car() {
  return (
    <h2>
      This is car component..
    </h2>
  )
} */

//export const Car = () => <h2>This is car component.</h2>

/* export const Car = () => (
  <h2>
    This is car component..
  </h2>
) */

export default props => (
  <div>
    <h3>Car name: {props.name}</h3>
    <p>Year: <strong>{props.year}</strong></p>
  </div>
)