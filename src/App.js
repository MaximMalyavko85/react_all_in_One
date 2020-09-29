import React from 'react';
import './App.scss'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
import Cars from './Cars/Cars'
import About from './About/About'
import CarDetail from './CarDetail/CarDetail'

export const ClickedContext = React.createContext(false)

class App extends React.Component {

  state = {
    isLoggetIn: false
  }

  render() {
    return (
      <div className={'container'}>
        <nav className={'navigation'}>
          <ul>
            <li>
              <NavLink
                to="/"
                exact
                activeClassName={'link active'}
              >Home</NavLink></li>
            <li><NavLink to="/about"
              activeClassName={'link active'}
              activeStyle={{
                color: 'green'
              }}
            >About</NavLink></li>
            <li><NavLink
              to={{
                pathname: '/cars'
              }}
              activeClassName={'link active'}
            >Cars</NavLink></li>
          </ul>
        </nav>

        <div className="container" style={{ textAlign: 'center' }}>
          <h3>is logget in {this.state.isLoggetIn ? 'TRUE' : 'FALSE'}</h3>
          <button onClick={() => this.setState({
            isLoggetIn: true
          })}>LogIn</button>
        </div>
        <hr />
        <Switch>
          <Route path='/' exact render={() => <h1>Base path</h1>} />
          {
            this.state.isLoggetIn && <Route path='/about' component={About} />
          }
          <Route path='/cars/:name' component={CarDetail} />
          <Route path='/cars' component={Cars} />
          <Redirect to={'/'} />
          {/* <Route render={() => <h1 style={{ color: 'red', textAlign: 'center' }}>404 not found</h1>} /> */}
        </Switch>
      </div>
    )
  }
}

export default App
