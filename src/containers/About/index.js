import React, {Component} from 'react'
// import ArticleMap  from 'data/article'
import './index.css'
import {Link} from 'react-router-dom'
import touxiang from '../../img/touxiang.jpeg'

export default class Index extends Component {
  	render () {
	    return (
	      <div className="aboutwrap">
	      	<header className="header">
	            <ul>
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
          	</header>
	      	<div className="aboutMe">
	      		<div className="head">
	      			<a href="profile.html" className="profilepic">
              			<img src={touxiang} className="img-circle" />
              		</a>
	      		</div>
	      		<div className="tech">
	      			<h3>技能</h3>
	      			<div className="alltech">
	      				<div className="unit">React</div>
	      				<div className="unit">reactRouter</div>
	      				<div className="unit">redux</div>
	      				<div className="unit">vue</div>
	      				<div className="unit">jQuery</div>
	      				<div className="unit">webpack</div>
	      				<div className="unit">npm</div>
	      				<div className="unit">css3</div>
	      				<div className="unit">less</div>
	      				<div className="unit">stylus</div>
	      				<div className="unit">html5</div>
	      				<div className="unit">es6</div>
	      				<div className="unit">git</div>
	      				<div className="unit">ant</div>
	      				<div className="unit">ejs</div>
	      			</div>
	      			<h3>联系方式</h3>
	      			<div className="contact">
	      				<p>email:514248288@qq.com</p>
	      				<p>tel:18501374232</p>
	      			</div>
	      			
	      		</div>
	      	</div>
	      </div>
	    )
  	}
}