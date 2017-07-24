import React, {Component} from 'react'
import indexBg from '../../img/indexbg.jpg'
import style from './index.css'
import {Link} from 'react-router-dom'
class ModuleA extends Component{
  render() {
    return (
      <div className="entrybg">
        <div className="linkwrap">
          <h3 className="title">Lealm个人博客</h3>
          <ul className="clear nav">
            <li>
              <Link to='/play'>休闲</Link>
            </li>
            <li>
              <Link to='/learn'>学习笔记</Link>
            </li>
          </ul>
          <p>
            <Link to='/about'>about me</Link>
          </p>
        </div>
      </div>
    );
  }
}

export default ModuleA