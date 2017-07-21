import React, {Component} from 'react'
import indexBg from '../../img/indexbg.png'
import style from './index.css'
import {Link} from 'react-router-dom'
class ModuleA extends Component{
  render() {
    return (
      <div>
        <ul className="clear nav">
      		<li>
      			<Link to='/'>首页</Link>
      		</li>
          <li>
            <Link to='/play'>休闲</Link>
          </li>
          <li>
            <Link to='/learn'>学习笔记</Link>
          </li>
    	</ul>
      </div>
    );
  }
}

export default ModuleA