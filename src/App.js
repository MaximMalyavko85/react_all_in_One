import React from 'react';
import classes from './App.module.scss'
import Car from './Car/Car'

class App extends React.Component {

  state = {
    cars: [
      { name: "Ford", year: "2018" },
      { name: "Shkoda", year: "2010" },
      { name: "Mazda", year: "2017" }
    ],
    pageTitle: "React Car shop",
    showCars: true
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

  render() {
    const divStyle = {
      textAlign: 'center'
    }

    let cars = null
    if (this.state.showCars) {
      cars = this.state.cars.map((i, index) =>
        <Car
          key={index}
          name={i.name}
          year={i.year}
          onDelete={this.deleteHandler.bind(this, index)}
          onChangeName={event => this.onChangeName(event.target.value, index)}
        />
      )
    }

    return (
      <div style={divStyle} className={classes['container']}>
        <h1>{this.state.pageTitle}</h1>
        <button onClick={this.toggleCarsHandler.bind(this)}>Toggle cars list</button>
        <div style={{
          width: 400,
          margin: 'auto',
          paddingTop: "20px"
        }}>
          {
            cars
          }
        </div>
      </div>
    )
  }
}

export default App
