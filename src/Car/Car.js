import React from 'react'
import './Car.scss'
import Radium from 'radium'

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

const Car = props => {
  const InputClasses = ['input']

  if (props.name !== '') {
    InputClasses.push('green')
  } else {
    InputClasses.push('red')
  }

  if (props.name.length > 4) {
    InputClasses.push('bold')
  }

  const style = {
    boxShadow: '0 4px 5px 0 rgba(0, 0, 0, 0.25)',
    border: '1px solid #ccc',
    ':hover': {
      border: "1px solid transparent",
      boxShadow: "0, 4px 15px 0 rgba(0,0,0, .25)",
      cursor: "pointer"
    }
  }

  return (
    <div className="Car" style={style}>
      <h3>Car name: {props.name}</h3>
      <p>Year: <strong>{props.year}</strong></p>
      <input
        type="text"
        onChange={props.onChangeName}
        value={props.name}
        className={InputClasses.join(' ')}
      />
      <button onClick={props.onDelete.bind(this)}>Delete</button>
    </div>
  )
}



export default Radium(Car)