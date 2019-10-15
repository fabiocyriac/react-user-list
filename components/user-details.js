import React, { Component } from 'react';
import { render } from 'react-dom';
import '../style.css';
import {connect} from 'react-redux';
import {userAction} from '../actions/user-action';
import bindActionCreators from 'redux';


class UserDetails extends Component {
  constructor() {
    super();
  }

  render() {
    if(this.props.activeuser == null){
      return null;
    }
    return (
      <div>
      <ul>
             <li>{this.props.activeuser.firstName}</li>
             <li>{this.props.activeuser.lastName}</li>
             <li>{this.props.activeuser.job}</li>

        </ul>
      </div>
    );
  }

}


function mapStateToProps(state){
  return (
    {
      activeuser: state.activeuser,
    }
  );
}




export default connect(mapStateToProps)(UserDetails);