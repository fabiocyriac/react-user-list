import React, { Component } from 'react';
import { render } from 'react-dom';
import '../style.css';
import {connect} from 'react-redux';
import {userAction} from '../actions/user-action';
import bindActionCreators from 'redux';


class UserList extends Component {
  constructor() {
    super();
    this.renderList = this.renderList.bind(this);
  }

  render() {
    return (
      <div>
      <ul>
        {
         this.renderList()
        }
        </ul>
      </div>
    );
  }

   renderList(){
      return this.props.users.map((user) => {
            return (<li key={user.id} onClick={() => this.props.userAction(user)}>{user.firstName} {user.lastName}</li>);
      });
  }

}


function mapStateToProps(state){
  return (
    {
      users: state.users,
    }
  );
}


function mapDispatchToProps(dispatch){
  return (
      {
      userAction: (user) => dispatch(userAction(user))
      }
    );
}


export default connect(mapStateToProps, mapDispatchToProps)(UserList);