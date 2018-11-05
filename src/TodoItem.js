import React, { component } from 'react'

class TodoItem extends Component {

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick
	}
	render(){
		return <div onClick={this.handleClick}>{this.props.content}</div>
	}
	handleClick() {
			this.props.DeleteItem(this.props.index)
			this.handleItemDelete
	}
}

export default TodoItem;