import React from 'react';
import './App.css'
import Car from './Car/Car'

class App extends React.Component {

  state = {
    cars: [
      { name: "Ford", year: "2018" },
      { name: "Shkoda", year: "2010" },
      { name: "Mazda", year: "2017" }
    ],
    pageTitle: "React Car shop "
  }

  //changeTitleHandler: function () {}
  //changeTitleHandler(){}
  changeTitleHandler = () => {
    this.setState({pageTitle: `${this.state.pageTitle} changed`})
  }

  render() {
    const divStyle = {
      textAlign: 'center'
    }
    const cars = this.state.cars

    return (
      <div style={divStyle} className="container">
        <h1>{this.state.pageTitle}</h1>
        <button onClick={this.changeTitleHandler}>Change title</button>
        {
          cars.map(i => <Car name={i.name} year={i.year} />)
        }
      </div>
    )
  }
}

export default App
