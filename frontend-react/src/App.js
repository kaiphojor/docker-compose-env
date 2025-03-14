// import logo from './logo.svg';
import './App.css';
// import React, { useEffect } from 'react';
// import axios from 'axios';
import Example from './Example';
import DbConnectExample from './DbConnectExample';
import ReadPost from './ReadPost';

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
        <DbConnectExample></DbConnectExample>
        <ReadPost></ReadPost>
        
        
      </header>
    </div>
  );
}

export default App;
