import React, {Component} from 'react'
import {render} from 'react-dom'

class App extends Component {
  static defaultProps = {
  	
  }
  constructor() {
    super()
    this.state = {

    }
  }
  componentDidMount() {

  }
  render() {
    return (
      <div>Hello, React</div>
    )
  }
}


render(
	<App />,
	document.body.appendChild(document.createElement('div'))
)