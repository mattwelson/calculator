import React, { Component } from 'react'
import Display from '../Components/Display'
import ButtonPanel from '../Components/ButtonPanel'

import { calculate } from '../data/calculate'

class Calculator extends Component {
  state = {
    total: 0,
    next: null,
    operation: null,
  }

  handleClick = (buttonName) => {
    const value = buttonName.target.innerText
    this.setState(calculate(this.state, value))
  }

  handleKey = (e) => {
    console.log({e})
  }

  render = () => (
    <div className="calc" onKeyUp={this.handleKey}>
      <Display>{ this.state.next || this.state.total }</Display>
      <ButtonPanel handleClick={ this.handleClick } />
    </div>
  )
}

export default Calculator
