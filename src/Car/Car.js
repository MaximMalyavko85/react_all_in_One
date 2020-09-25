import React from 'react'
import style from './Car.module.scss'
import PropTypes from 'prop-types'
import withClass from '../hoc/withClass'

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

class Car extends React.Component {
  constructor(props) {
    super(props)

    this.inputRef = React.createRef()
  }
  /* shouldComponentUpdate(nextProps, nextState) {
    console.log("Car - shouldComponentUpdate,", nextProps, nextState)
    return nextProps.name.trim() !== this.props.name.trim()
  } */

  /*  static getDerivedStateFromProps(nextProps, prevState) {
     console.log("Car - getDirivedStateFromProps")
 
     return prevState
   } */

  /*  componentDidUpdate() {
     console.log("Car - componentDidUpdate")
     return true
   }
 
   getSnapshotBeforeUpdate(){
     console.log("Car -getSnapshotBeforeUpdate")
   }
 
   componentWillUnmount() {
     console.log("Car - componentWillUnmount")
   } */

  componentDidMount() {
    if (this.props.index === 0) {
      this.inputRef.current.focus()
    }
  }

  render() {
    console.log("Car- render")
    const InputClasses = ['input']

    if (this.props.name !== '') {
      InputClasses.push('green')
    } else {
      InputClasses.push('red')
    }

    if (this.props.name.length > 4) {
      InputClasses.push('bold')
    }

    return (
      <React.Fragment>
        <h3>Car name: {this.props.name}</h3>
        <p>Year: <strong>{this.props.year}</strong></p>
        <input
          ref={this.inputRef}
          type="text"
          onChange={this.props.onChangeName}
          value={this.props.name}
          className={InputClasses.join(' ')}
        />
        <button onClick={this.props.onDelete.bind(this)}>Delete</button>
      </React.Fragment>
    )
  }
}

Car.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.number,
  index: PropTypes.number,
  onChangeName: PropTypes.func,
  onDelete: PropTypes.func
}


export default withClass(Car, style.Car)