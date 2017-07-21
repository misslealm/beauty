
import React, {Component} from 'react'
import {render} from 'react-dom'
import { BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import ModuleA from './containers/Index/index'

import 'common/reset.css'
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
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={ModuleA}/>
        </Switch>
      </BrowserRouter>
    )
  }
}


render(
	<App />,
	document.body.appendChild(document.createElement('div'))
)