import React, {Component} from 'react'
// import ArticleMap  from 'data/article'
import './index.css'
import {Link} from 'react-router-dom'
import touxiang from '../../img/touxiang.jpg'

export default class Index extends Component {
	constructor(props){
	    super(props)
	    this.state={
	    	showSidebar: false
	    }
	  
	    this.showPerson = this.showPerson.bind(this)
  	}
	showPerson = () => {
		this.setState({
			showSidebar: !this.state.showSidebar
		})
	}


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
	              	<i className="icon iconfont icon-menu" onClick={this.showPerson}></i>
	            </ul>
          	</header>
	      	<div className="aboutMe">
	      		<div className={"sidebar " + (this.state.showSidebar ? "show" : "")} >
	      			<div className="head">
		      			<a href="profile.html" className="profilepic">
	              			<img src={touxiang} className="img-circle" />
	              		</a>
		      		</div>
		      		<h3 className="namewrap">李敏</h3>
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
							<p>Tel:18501374232</p>
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
	      				<h3>技能清单<i className="icon iconfont icon-emoji-3"></i></h3>
	      				<div className="skill">
	      					<p>1、平时开发中熟练react全家桶，less，stylus预处理器，高效完成项目
	      					</p>
							<p>2、项目开发中熟练使用webpack构建环境，熟练使用git命令
							</p>
							<p>3、项目开发中熟练使用es6新语法，熟悉nodejs，vue</p>
							<p>4、目前在研究webpack开发插件、loader，学习node的express框架</p>
	      				</div>
	      			</article>
	      			<article>
	      				<h3>项目经验(2015年至今:链家网)</h3>
	      				<div className="projectW">
	      					<ul className="exp">
	      						<li>
	      							<div className="circle"></div>
	      							<h4>二手房link业绩系统，用户管理系统 2015.07-2015.12 </h4>
	      							<div className="clearfix">
	      								<p>这两个项目分别用于管理经纪人业绩，和用户配置权限</p>
	      								<p>技术栈：backbone，less，jQuery</p>
	      								<div className="light">
	      									<div className="lab">个人成长：</div>
	      									<div className="lightwrap">
	      										<p>【表单校验】：参与开发公用form表单校验规则，减少代码冗余度</p>
	      									</div>
      									</div>
      								</div>
  								</li>
  								<li>
	      							<div className="circle"></div>
	      							<h4>金融客，TE系统 2016.01-2016.09 </h4>
	      							<div className="clearfix">
	      								<p>金融客项目用于管理房屋交易人员的信息，TE系统主要负责北京房屋交易
	      								</p>
	      								<p>技术栈：backbone，jQuery，less，webpack</p>
	      								<div className="light">
	      									<div className="lab">个人成长：</div>
	      									<div className="lightwrap">
	      										<p>【组件化开发】：提高复用率和开发效率</p>
	      									</div>
      									</div>
      								</div>
  								</li>
  								<li>
	      							<div className="circle"></div>
	      							<h4>合同签前审核 2017.05-2017.05 </h4>
	      							<div className="clearfix">
	      								<p>该项目用于合同系统的签前审核</p>
	      								<p>技术栈：vue，h5，less，webpack</p>
	      								<div className="light">
	      									<div className="lab">个人成长：</div>
	      									<div className="lightwrap">
	      										<p>【适配移动端】：使用zepto.js解决了click事件300ms延迟的问题</p>
	      										<p>【事件穿透】：将点击事件全部替换成touch事件，解决了点击事件穿透的问题</p>
	      									</div>
      									</div>
	      								
      								</div>
  								</li>
  								<li>
	      							<div className="circle"></div>
	      							<h4>集团方向项目 2016.10-至今 </h4>
	      							<div className="clearfix">
	      								<p>该项目主要包含集团合同管理、基础数据配置、报销系统、审批系统四个子系统</p>
	      								<p>技术栈：react,react-router,redux,webpack,antd</p>
	      								<div className="light">
	      									<div className="lab">个人成长：</div>
	      									<div className="lightwrap">
	      										<p>【前后端分离】：实现了前后端分离方式开发</p>
			      								<p>【webpack热更新】：使用webpack热更新，可减少提交代码冲突</p>
			      								<p>【本地mock】：在本地使用mock数据，减少与后端的联调成本</p>
			      								<p>【组件化】：开发业务组件，提升了项目的开发效率</p>
	      									</div>
      									</div>
      								</div>
  								</li>
  								<li>
	      							<div className="circle"></div>
	      							<h4>个人博客 2017.7-至今 <i className="icon iconfont icon-emoji-3"></i></h4>
	      							<div className="clearfix">
	      								<p>博客主要针对平时学习总结</p>
	      								<p>技术栈：react,react-router,redux,webpack</p>
	      								<div className="light">
	      									<div className="lab">个人成长：</div>
	      									<div className="lightwrap">
	      										<p>【mdToJs-loader】：读取markdowm文件里的内容，先转化成html，然后再转化成js</p>
			      								<p>【plugin】：编译前，同步文件夹下的markdown文件，获取所需信息，生成data</p>
			      								<p>持续更新中~</p>
	      									</div>
      									</div>
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