---
createTime: 2017/07/20 12:34:25
title:Router 4.0的用法
description:React_router升级到4.0后的变化
---
### Router 4.0

RR4 本次采用单代码仓库模型架构（monorepo），这意味者这个仓库里面有若干相互独立的包，分别是：

react-router React Router 核心

react-router-dom 用于 DOM 绑定的 React Router（适用于web）

react-router-native 用于 React Native 的 React Router

react-router-redux React Router 和 Redux 的集成

react-router-config 静态路由配置的小助手

react-router与react-router-dom的区别在于react-router-dom这个包多了<Link> <BrowserRouter> 这样的 DOM 类组件（所以平时只需要引入react-router-dom就好了）

#### 新增了BrowserRouter，HashRouter，MemoryRouter

```html
	//v4
	<BrowserRouter basename="/page">
	  <div>
	    <Route path='/about' component={About} />
	    <Route path='/contact' component={Contact} />
	  </div>
	</BrowserRouter>

	// BrowserRouter里的内容必须只有一个子元素
	BrowserRouter 可添加basename这个属性 将页面的路由引向二级目录
	
```

####Route组件：基本的职责就是当页面的访问地址与 Route 上的 path 匹配时，就渲染出对应的 UI 界面。

#####Route自带三个render method 和三个props
```html
<Route component>
<Route render>
<Route children>
```
每种 render method 都有不同的应用场景，同一个<Route> 应该只使用一种 render method ，大部分情况下你将使用 component 。

props 分别是：

match

location

history

#####Route中的属性：

exact，为true的时候，路由严格匹配，path 为 '/one' 的路由将不能匹配 '/one/two'，反之，亦然

strict，对路径末尾斜杠的匹配。如果为 true。path 为 '/one/' 将不能匹配 '/one' 但可以匹配 '/one/two'。

####Link组件：提供无障碍导航
```
	<Link to="/courses" />
```
##### to可以直接加字符串，也可以加Object，携带参数
```
<Link to={{
  pathname: '/course',
  search: '?sort=name',
  state: { price: 18 }
}} />
```

#####replace: bool
为 true 时，点击链接后将使用新地址替换掉上一次访问的地址，什么意思呢，比如：你依次访问 '/one' '/two' '/three' ’/four' 这四个地址，如果回退，将依次回退至 '/three' '/two' '/one' ，这符合我们的预期，假如我们把链接 '/three' 中的 replace 设为 true 时。依次点击 one two three four 然后再回退会发生什么呢？会依次退至 '/three' '/one'

####Switch组件：只渲染出第一个与当前访问地址匹配的 Route 或 Redirect。

####Redirect 渲染时将导航到一个新地址，这个新地址覆盖在访问历史信息里面的本该访问的那个地址



