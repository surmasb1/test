import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './component/Menu/Menu'
import Main from './component/Main/Main'
import Search from './component/Search/Search'

function App() {
  return (
    <div className="App">

            <Menu/>
            <Search/>
            <Main/>

    </div>
  );
}

export default App;
