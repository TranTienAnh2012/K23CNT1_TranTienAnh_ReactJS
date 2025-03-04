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
import TtaReactArray from './components/TtaReactArray';
import TtaReactArray02 from './components/TtaReactArray02';
import Ttarender from './components/Ttarender';
import TtaReactArray04 from './components/TtaReactArray04';
import TtaReactArraylistStudent from './components/TtaReactArraylistStudent';

class TtaApp extends Component {
  render() {
    return (
      <div>
        <h1> Tran Tien Anh </h1>
        <hr/>
        <div>
          <h2>React Array to list</h2>
          <TtaReactArray />
        </div>
        <hr/>
        <div>
        <h2>React Array to list render nhiều components</h2>
          <TtaReactArray02 />
        </div>
        <Ttarender />
        <hr/>
        <TtaReactArray04 />
        <hr/>
        <TtaReactArraylistStudent />
      </div>
    );
  }
}

export default TtaApp;