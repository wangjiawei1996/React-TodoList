import React, { Component } from 'react'
class Test extends Component {
	//当父组件的render函数被运行的时候，它的子组件的render都将被运行一次
	render(){
		return <div>{this.props.content}</div>
	}
}
export default Test;