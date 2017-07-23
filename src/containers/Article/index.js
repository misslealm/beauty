import React, {Component} from 'react'
// import ArticleMap  from 'data/article'
import AsyncComponent from 'components/AsyncComponent/index'
import articles from '../../data/article'
import './index.css'
import {Link} from 'react-router-dom'

export default class Index extends Component {
	// <ArticleRender articlePath={path}/>
	
  	render () {
	  	const filePath = this.props.match.params.path
	  	const path = `/article/${filePath}.md`
	  	const nowComp = articles.find((art,index) => {
			return art.path == `/${filePath}`
		})
	    return (
	      <div className="articlewrap">
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
	      	<div className="article_header"></div>
	      	<div className="article-wrap">
	      		<AsyncComponent comFn={nowComp.component}/>
	      	</div>
	      </div>
	    )
  	}
}