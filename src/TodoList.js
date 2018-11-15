import React, { Component } from 'react';
import { connect } from 'react-redux';

const TodoList = (props) => {
  const { inputValue,list,changeInputValue,handleClick } = props;
    return (
      <div>
        <div>
          <input value={ inputValue } onChange={changeInputValue} />
          <button onClick={handleClick}>提交</button>
        </div>
        <ul>
          {
            list.map((item,index) => {
              return <li key={index}>{item}</li>
            })
          }
        </ul>
      </div>
    )
}


//store里的数据和props里的数据相关联
const mapStateToProps = (state) =>{
  return {
    inputValue:state.inputValue,
    list:state.list
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
    },
    handleClick(){
      const action = {
        type:'add_item'
      }
      dispatch(action);
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);