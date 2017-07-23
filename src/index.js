
import React, {Component} from 'react'
import {render} from 'react-dom'
import { BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import ModuleIndex from './containers/Index/index'
import ModulePlay from './containers/Play/index'
import ModuleLearn from './containers/Learn/index'
import ModuleArticle from './containers/Article/index'
import 'common/reset.css'
import 'common/common.css'
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
          <Route path="/about" exact component={ModuleLearn}/>
          <Route path="/article/:path" exact component={ModuleArticle}/>
        </Switch>
      </BrowserRouter>
    )
  }
}


render(
	<App />,
	document.getElementById("root")
)