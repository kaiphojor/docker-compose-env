// import logo from './logo.svg';
import './App.css';
// import React, { useEffect } from 'react';
// import axios from 'axios';
import Example from './components/Example';
import ReadUser from './pages/ReadUser';
import ReadPost from './pages/ReadPost';
import TodoApp from './components/TodoApp';

function App() {
  // useEffect(() => {
  //   axios.get(`${process.env.REACT_APP_API_URL}/`)
  //     .then(response => console.log(response.data))
  //     .catch(error => console.error('API 호출 실패:', error));
  // }, []);
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
          hot reloading completed?
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        Learn something..
        </a>
        <Example></Example>
        <ReadUser></ReadUser>
        <ReadPost></ReadPost>
        <TodoApp></TodoApp>
        
        
      </header>
    </div>
  );
}

export default App;
