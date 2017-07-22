import React, {Component} from 'react'
import indexBg from '../../img/indexbg.png'
import style from './index.css'
import {Link} from 'react-router-dom'
import dataList from '../../data/article'

export default class ModuleLearn extends Component {
  render () {
    return (
      <div>
        <section id="container" >
          <aside className="left-wrap">
            <div className="overlay"></div>
            <div id="sidebar"  className="nav-collapse">
              <header className="inner">
                <a href="profile.html" className="profilepic">
                  <img src="https://avatars2.githubusercontent.com/u/24605662?v=3&amp;u=0a7208324d7cdfb03d5d0686e0d0bade3de6a1e2&amp;s=400" className="img-circle" />
                </a>
                <h1 className="header-author">
                  <a href="/" >
                    Lealm
                </a>
                </h1>
                <p>这里是签名111</p>
                <ul className="sidebar-menu" id="nav-accordion">
                  <li className="mt">
                    <a className="active" href="index.html">
                        <i className="glyphicon glyphicon-home"></i>
                        <span>首页</span>
                    </a>
                  </li>
                </ul>
              </header>
            </div>
          </aside>
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
                2017 - 没有版权，哈哈哈哈
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