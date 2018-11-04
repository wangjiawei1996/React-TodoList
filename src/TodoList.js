import React, { Component, Fragment} from 'react';

class TodoList extends Component {
  constructor(props) {  //接受props数据
		super(props);       //调用props这个方法
		this.state = {
			inputValue: '',
			list: []
		}
	}

    render() {
        return (
            <Fragment>
							<div>
								<input
									value={this.state.inputValue}
									onChange={this.handleInputChange.bind(this)}
							/>
								<button>提交</button>
							</div>
							<ul>
								<li>学习React-TodoList</li>
								<li>Learning</li>
							</ul>
						</Fragment>
        )
		}
		handleInputChange(e){
			this.setState({
				inputValue : e.target.value
			})
		}
}
export default TodoList;