import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	shouldComponentUpdate(nextProps,nextState){
		if(nextProps.content != this.props.content){
			return ture
		}else{
			return false
		}
	}
	render() {
		const { content } = this.props;
		return (
			<div onClick={this.handleClick}>
			  {content}
			</div>
		)
	}
	handleClick() {
		const { DeleteItem, index } = this.props
		DeleteItem(index);
	}
}

TodoItem.propTypes = {
	content:PropTypes.oneOfType([PropTypes.number,PropTypes.string]),
	DeleteItem:PropTypes.func, 
	index:PropTypes.number
}
export default TodoItem;