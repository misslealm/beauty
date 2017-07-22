import React, {Component} from 'react'
import highlight from 'highlight.js'

export default class extends Component{
	componentWillMount(){
		const comFn = this.props.comFn
		comFn().then((Component) =>{
			this.renderComponent = Component.default ? Component.default:Component
			this.forceUpdate()
		})
	}
	componentWillUnmount() {
		this.renderComponent = null
	}
	componentDidUpdate(prevProps, prevState) {

	    var blocks = Array.from(document.querySelectorAll('pre code'));
	    blocks.forEach(block => highlight.highlightBlock(block));
  	}
	render(){
		if(!this.renderComponent){
			return null
		}
		const RenderComponent = this.renderComponent || 'div'
		// return React.createElement(renderComponent, {}, [])
		return <RenderComponent {...this.props}/>

	}
}