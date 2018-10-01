// ES6: import, export, class, extends
// 這份檔案只是 component - App 的聲明，在 index.js 被實體化(instance)

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    // const 是常數不可改變，若為 Array 或 Object 可以更新內容(pass by reference)
    // 不變用 const，會變用 let，少用或不用 var
    const helloWorld = 'Welcome to The Road To Learn React',
        person = {
          'lastName': 'Weng'
        };
        person.firstName = 'Winter';
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{helloWorld}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload. <br/>
          I'm {`${person.firstName} ${person.lastName}`} :)
        </p>
      </div>
    );
  }
}

export default App;
