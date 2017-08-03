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
	      		<div className="sidebar">
	      			<div className="head">
		      			<a href="profile.html" className="profilepic">
	              			<img src={touxiang} className="img-circle" />
	              		</a>

		      		</div>
		      		<h3 className="namewrap">李敏的简历</h3>
		      		<div className="tech">
		      			<article>
			      			<strong>基础信息</strong>
			      			<p>个人信息: 李敏 / 女 / 24岁 </p>
							<p>学校：浙江传媒学院</p>
							<p>专业：广播电视工程</p>
							<p>英语水平: CET-6</p>
							<p>博客: <a href="vholl.com">vholl.com</a></p>
							<p>GitHub: <a href="https://github.com/misslealm">https://github.com/misslealm</a></p>
							<p>在线简历: <a href="http://vholl.com/#/about">http://vholl.com/#/about</a></p>
						</article>
						<article>
							<strong>联系方式</strong>
			      			<p>Email: lealm@qq.com</p>
							<p>QQ: 514248288</p>
							<p>Tel:18729316081</p>
						</article>
						<article>
							<strong>应聘岗位</strong>
			      			<p>Web前端 全职</p>
						</article>
						<article>
							<strong>技能</strong>
			      			<p>
			      				构建：webpack/npm
			      			</p>
			      			<p>
			      				框架：react/react-router/redux/vue
			      			</p>
			      			<p>
			      				css：less/stylus/css3
			      			</p>
			      			<p>
			      				库：backbone/jQuery
			      			</p>
			      			<p>
			      				其他：node/html5/es6/git/ant/ejs
			      			</p>
						</article>
	      			</div>
	      		</div>
	      		<div className="content">
	      			<article>
	      				<h3>技能清单</h3>
	      				<div className="skill">
	      					<p>1、平时开发中熟练react全家桶，less，stylus预处理器，高效完成项目。
	      					</p>
							<p>2、项目开发中熟练使用webpack构建环境，熟练使用git命令。
							</p>
							<p>3、项目开发中熟练使用es6新语法，熟悉nodejs，vue。</p>
							<p>4、目前在研究webpack开发插件、loader，学习node的express框架。</p>
	      				</div>
	      			</article>
	      			<article>
	      				<h3>项目经验(2015年至今在链家网任web前端)</h3>
	      				<div>
	      					<ul className="exp">
	      						<li>
	      							<div className="circle"></div>
	      							<h4>二手房link业绩系统，用户管理系统 2015.07-2015.12 </h4>
	      							<div className="clearfix">
	      								<p>这两个项目分别用于管理经纪人业绩，和用户配置权限。使用了Backbone，less，jQuery技术。</p>
      								</div>
  								</li>
  								<li>
	      							<div className="circle"></div>
	      							<h4>金融客，TE系统 2016.01-2016.09 </h4>
	      							<div className="clearfix">
	      								<p>金融客项目用于管理房屋交易人员的信息。TE系统主要负责北京房屋交易。这两项目采用了backbone，jquery，less技术，使用webpack构建。TE项目开发阶段，由于项目需求紧张，第一次接触了组件化开发的思想。使用组件化开发，大大提高了项目开发的效率，大量减少了代码的冗余。</p>
      								</div>
  								</li>
  								<li>
	      							<div className="circle"></div>
	      							<h4>合同签前审核 2017.05-2017.05 </h4>
	      							<div className="clearfix">
	      								<p>该项目用于合同系统的签前审核。使用了vue，h5，less技术，使用redskull构建。最后嵌入app中，在本项目开发中，我熟悉了vue技术，且踩了一些移动端事件的坑，并从中学会了如何进行移动端开发</p>
      								</div>
  								</li>
  								<li>
	      							<div className="circle"></div>
	      							<h4>集团方向项目 2016.10-至今 </h4>
	      							<div className="clearfix">
	      								<p>该项目主要包含集团合同管理、基础数据配置、报销系统、审批系统四个子系统。项目采用了react，react-router,redux,reskull构建，引入了antd，实现了前后端分离方式开发 。使用redskull热更新，可减少提交代码冲突，在本地使用mock数据，减少与后端的联调成本，在开发该项目过程中，形成了组件化开发的逻辑，把小功能块提取出来，提升了项目的开发效率。并熟练掌握了antd。</p>
      								</div>
  								</li>
							</ul>
	      				</div>
	      			</article>
	      		</div>
	      		
	      	</div>
	      </div>
	    )
  	}
}