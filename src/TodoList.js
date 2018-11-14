import React, { Component } from 'react';
import store from './store';
import { connect } from 'react-redux';

class TodoList extends Component {
  render() {
    return (
      <div>
        <div>
          <input value={this.props.inputValue} onChange={this.props.changeInputValue.bind(this)}/>
          <button>提交</button>
        </div>
        <ul>
          <li>Dell</li>
        </ul>
      </div>
    )
  }
}
//store里的数据和props里的数据相关联
const mapStateToProps = (state) =>{
  return {
    inputValue:state.inputValue
  }
}
//props里的数据对store里的数据做修改和store里的dispatch方法做关联
const mapDispatchToProps = (dispatch) =>{
  return {
    changeInputValue(e) {
      const action = {
        type: 'change_input_value',
        value:e.target.value
      }
      dispatch(action)
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);