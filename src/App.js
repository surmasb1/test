import React from 'react';
import './App.css';
import Menu from './component/Menu/Menu'
import Main from './component/Main/Main'
import Search from './component/Search/Search'




function App() {

  return (
    <div className="App">
            <div className='box1'>
                <Menu/>

            </div>
            <div className='box2'>
                <Search/>
                <Main/>
            </div>

    </div>
  );
}

export default App;
