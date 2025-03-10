// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { Component } from 'react';
import TestOne from './components/TestOne';
import TestTta2 from './components/TestTta2';
import TtauseEffect from './components/TtauseEffect';
import TtauseStateoficel from './components/TtauseStateoficel';

class TtaApp extends Component {
  render() {
    return (
      <div>
        <h1>Tran Tien Anh K23CNT1 Hooks</h1>
        <div>
        <h1>Test1</h1>
        <TestOne />
        </div>
        <hr/>
        <div className='alert alert-danger mx2'>
        <h1>Test2</h1>
        <TestTta2 />
        </div>

        <hr/>
      <div>
          <TtauseStateoficel />
        </div>  
      <TtauseEffect />
            
      </div>
    );
  }
}

export default TtaApp;
