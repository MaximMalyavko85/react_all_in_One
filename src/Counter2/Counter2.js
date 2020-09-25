import React from 'react'
import { ClickedContext } from '../App'


export default props => {
  return (
    <div style={{
      border: '1px solid #fff',
      width: '200px',
      margin: '10px auto'
    }}>
      <h3>Counter 2</h3>
      <ClickedContext.Consumer>
        {value => value ? <p>Click</p> : null}
      </ClickedContext.Consumer>
    </div>
  )
}