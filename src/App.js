import React, { Component } from 'react';
import './App.css';
import ItemList from "./components/ItemList";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ItemList />
      </div>
    );
  }
}

export default connect(null, null)(App);
