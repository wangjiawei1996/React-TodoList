import React, { Component, Fragment} from 'react';
import TodoItem from './TodoItem';
import './style.css';

class TodoList extends Component {
  constructor(props) {  //接受props数据
		super(props);       //调用props这个方法
		this.state = {
			inputValue: '',
			list: []
		}
		this.handleInputChange = this.handleInputChange.bind(this)
		this.handleBtnClick = this.handleBtnClick.bind(this)
		this.handleItemDelete = this.handleItemDelete.bind(this)
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
									onChange={this.handleInputChange}
							/>
								<button onClick={this.handleBtnClick}>提交</button>
							</div>
							<ul>
								{this.getTodoItem()}
							</ul>
						</Fragment>
        )
		}
		getTodoItem() {
			return this.state.list.map((item,index) => {
				return (
					<TodoItem
						key = {index}
						content={item}   //子组件怎么改变父组件的数据：父组件向子组件传递一个方法，子组件向父组件传值时，需要调用这个方法
						index={index}
						DeleteItem = {this.handleItemDelete}
					/>
				)
			})
		}
		handleInputChange(e){
			const value = e.target.value
			this.setState(() => ({
				inputValue : value
			}));
		}
		handleBtnClick(){
			this.setState((prevState) => ({
				list:[...prevState.list, prevState.inputValue],   //...是个展开运算符
		   	inputValue:''
			}));
		}
		handleItemDelete(index){
			this.setState((prevState) => {
				const list = [...prevState.list];     //state不允许我们做任何改变 非得改可以拷贝一个副本，进行传值
				list.splice(index, 1);
				return {list}
			})
	}
}
export default TodoList;