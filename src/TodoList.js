import React, { Component, Fragment} from 'react';
import './style.css';
import TodoItem from './TodoItem';

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
								{/*下面是一个input框*/ /*{}里面是一个Js表达式*/ }
								<label htmlFor="insertArea">点击查看</label>
								<input
								  id="insertArea"
								  className='input'
									value={this.state.inputValue}
									onChange={this.handleInputChange.bind(this)}
							/>
								<button onClick={this.handleBtnClick.bind(this)}>提交</button>
							</div>
							<ul>
								{
									this.state.list.map((item,index) => {
										return (
											<div>
												<TodoItem
													content={item}
													index={index}
													DeleteItem = {this.handleItemDelete.bind(this)}
											  />
											</div>
										)
									})
								}
							</ul>
						</Fragment>
        )
		}
		handleInputChange(e){
			this.setState({
				inputValue : e.target.value
			})
		}
		handleBtnClick(){
			this.setState({
				list:[...this.state.list,this.state.inputValue],   //...是个展开运算符
				inputValue:''
			})
		}
		handleItemDelete(index){
			const list = [...this.state.list];     //state不允许我们做任何改变 非得改可以拷贝一个副本，进行传值
			list.splice(index, 1) 
			this.setState({
				list:list
			})
		}
}
export default TodoList;