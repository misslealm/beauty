
import React, {Component} from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux';
import configureStore from './store'
import { HashRouter, Route, Redirect, Switch} from 'react-router-dom'
import ModuleIndex from './containers/Index/index'
import ModulePlay from './containers/Play/index'
import ModuleLearn from './containers/Learn/index'
import ModuleArticle from './containers/Article/index'
import ModuleAbout from './containers/About/index'
import 'common/reset.css'
import 'common/common.css'

const store = configureStore()
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
      <Provider store={store}>
        <HashRouter>
          <Switch>
            <Route path="/" exact component={ModuleIndex}/>
            <Route path="/play" exact component={ModulePlay}/>
            <Route path="/learn" exact component={ModuleLearn}/>
            <Route path="/about" exact component={ModuleAbout}/>
            <Route path="/article/:path" exact component={ModuleArticle}/>
          </Switch>
        </HashRouter>
      </Provider>
    )
  }
}


render(
	<App />,
	document.getElementById("root")
)