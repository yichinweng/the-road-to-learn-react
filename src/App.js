// ES6: import, export, class, extends
// 這份檔案只是 component - App 的聲明，在 index.js 被實體化(instance)

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    numComments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://github.com/reduxjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    numComments: 2,
    points: 5,
    objectID: 1,
  },
];

class App extends Component {
  // render 是 Component Class 的方法
  constructor(props) {
    // 有建構子時必須要寫 super(); 呼叫父類別的建構子
    super(props);
    this.state = {
      list,
    };
  }
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
        <section className="App-intro">
          {
            // map: 將原陣列每一元素經由 callback 函式運算後，回傳結果，回傳值為新的陣列
            // ES6 arrow function: 1 個參數時括號可省，回傳值時可省略 return 與花括號 (concise body)
            list.map(item => 
              <li key={item.objectID}>
                <a  href={item.url}>{item.title}</a>
                <span> By {item.author}, </span>
                <span>{item.numComments} comments, </span>
                <span>{item.points} points.</span>
              </li>
           )
          }
        </section>
      </div>
    );
  }
}

export default App;
