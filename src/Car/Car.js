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
  <div style={{
    border: "1px solid #eee",
    margin: "15px",
    padding: "15px",
    display: "inline-block"
  }}>
    <h3>Car name: {props.name}</h3>
    <p>Year: <strong>{props.year}</strong></p>
    <input type="text" onChange={props.onChangeName} value={props.name}/>
    <button onClick={props.onDelete.bind(this)}>Delete</button>
  </div>
)