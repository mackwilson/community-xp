import React from 'react';
import Menu from '../comps/Menu.js';
import '../css/App.css';

export default class LogInPage extends React.Component {
  render () {
    return (
      <div className="LogInPage">
        <Menu />
        <h1>This is where existing users log in.</h1>
      </div>
    );
  }
}
