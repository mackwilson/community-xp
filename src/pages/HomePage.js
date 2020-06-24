import React from 'react';
import '../css/App.css';
import Header from '../comps/Header.js';
import Menu from '../comps/Menu.js';

export default class HomePage extends React.Component {
  render() {
      return (
      <div className="HomePage">
        <Menu />
        <Header className="centre-text"/>
      </div>
    );
  }
}
