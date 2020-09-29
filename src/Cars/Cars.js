import React from 'react'

import Car from './Car/Car'
import ErrorBoundary from '../errorBoundary/errorBoundary'


export default class Cars extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      cars: [
        { name: "Ford", year: 2018 },
        { name: "Shkoda", year: 2010 },
        { name: "Mazda", year: 2017 }
      ],
      clicked: false,
      pageTitle: "React Car shop",
      showCars: true
    }
  }
  //changeTitleHandler: function () {}
  //changeTitleHandler(){}
  toggleCarsHandler = () => {
    this.setState({ showCars: !this.state.showCars })
  }

  changeTitleHandler = (title) => {
    this.setState({ pageTitle: title })
  }

  onChangeName = (name, index) => {
    const car = this.state.cars[index]
    car.name = name
    //const cars = this.state.cars.concat() //clone array
    const cars = [...this.state.cars] //clone array
    cars[index] = car
    this.setState({ cars })
  }

  deleteHandler(index) {
    const cars = this.state.cars.concat()
    cars.splice(index, 1) // с какого индекса сколько элементов
    this.setState({ cars })
  }

  goToHomePage = () => {
    console.log("click")
    this.props.history.push({ pathname: '/' })
  }

  render() {
    const divStyle = {
      textAlign: 'center'
    }

    let cars = null
    if (this.state.showCars) {
      cars = this.state.cars.map((i, index) =>
        <ErrorBoundary key={index}>
          <Car
            index={index}
            name={i.name}
            year={i.year}
            onDelete={this.deleteHandler.bind(this, index)}
            onChangeName={event => this.onChangeName(event.target.value, index)}
          />
        </ErrorBoundary>
      )
    }

    return (
      <div style={divStyle} className={'container'}>
        <h1 style={{ marginTop: 20 }}>{this.props.title}</h1>
       {/*  <button onClick={this.toggleCarsHandler.bind(this)}>Toggle cars list</button> */}
        {/*   <button onClick={() => this.setState({ clicked: true })}>Change counter</button> */}
        <div style={{
          width: 400,
          margin: 'auto',
          paddingTop: "20px"
        }}>
          <button onClick={this.goToHomePage}>GoToHomePage</button>
          <hr></hr>
          {
            cars
          }
        </div>
      </div>
    )
  }

}