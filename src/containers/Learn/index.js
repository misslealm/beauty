import React, {Component} from 'react'
import indexBg from '../../img/indexbg.png'
import style from './index.css'
import {Link} from 'react-router-dom'
import dataList from '../../data/article'
export default class ModuleLearn extends Component {
  render () {
    return (
      <div className="learnwrap">
        <section id="container" >
          <header className="header">
            <ul>
              <li>
                <Link to='/'>首页</Link>
              </li>
              <li>
                <Link to='/play'>休闲</Link>
              </li>
              
            </ul>
          </header>
          <section id="main-content">
            {dataList.map((article,index) => {
              return(
                <section className="wrapper" key={`content${index}`}>
                    <article>
                        <div className="meta">{article.createTime}</div>
                        <h1 className="title">{article.title}</h1>
                        <div className="entry-content">
                          {article.description}
                        </div>
                        <div className="actMore">
                          <Link to={`/article${article.path}`}>more >> </Link>
                        </div>
                    </article>
                  </section>
              )
            })}
          </section>
          <footer className="site-footer">
            <div className="text-center">
                Copyright © lealm 2017. All Rights Reserved
                <a href="index.html#" className="go-top">
                    <i className="fa fa-angle-up"></i>
                </a>
            </div>
          </footer>
        </section>
      </div>
    )
  }
}