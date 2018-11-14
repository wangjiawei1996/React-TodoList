import React, { Component } from 'react';
import store from './store';
import { connect } from 'react-redux';

class TodoList extends Component {
  render() {
    return (
      <div>
        <div>
          <input value={this.state.inputValue}/>
          <button>提交</button>
        </div>
        <ul>
          <li>Dell</li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  
}
export default connect(null,null)(TodoList);