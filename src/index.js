
import React, {Component} from 'react'
import {render} from 'react-dom'
import { BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import ModuleIndex from './containers/Index/index'
import ModulePlay from './containers/Play/index'
import ModuleLearn from './containers/Learn/index'
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
          <Route path="/" exact component={ModuleIndex}/>
          <Route path="/play" exact component={ModulePlay}/>
          <Route path="/learn" exact component={ModuleLearn}/>
        </Switch>
      </BrowserRouter>
    )
  }
}


render(
	<App />,
	document.body.appendChild(document.createElement('div'))
)