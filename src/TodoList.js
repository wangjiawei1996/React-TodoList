import React, { Component, Fragment} from 'react';

class TodoList extends Component {
    render() {
        return (
            <Fragment>
							<div><input /><button>提交</button></div>
							<ul>
								<li>学习React-TodoList</li>
								<li>Learning</li>
							</ul>
						</Fragment>
        )
    }
}
export default TodoList;