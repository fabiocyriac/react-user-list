import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import {createStore} from 'redux';
import allReducers from './reducers/index';
import {Provider} from 'react-redux';
import UserList from './components/user-list';
import UserDetails from './components/user-details';




const store = createStore(allReducers);

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
      <h2> User List </h2>
      <UserList />

      <hr/>
      <h2> User Details </h2>
      <UserDetails/ >
      </div>
    );
  }
}

render(<Provider store = {store} ><App /></Provider>, document.getElementById('root'));
