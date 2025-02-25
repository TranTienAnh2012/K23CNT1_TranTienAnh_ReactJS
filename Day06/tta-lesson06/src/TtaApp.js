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
import TtaEventFrom1 from './components/TtaEventFrom1';
import TtaEventForm2 from './components/TtaEventFrom2';
import TtaEvenForm3 from './components/TtaEvenFrom3';
import TtaEventFrom4 from './components/TtaEventFrom4';
import TtaEventFrom5 from './components/TtaEventFrom5';

class TtaApp extends Component {
  render() {
    return (
      <div className='container border my-3 bg-while'>
        <h1 className='text-center'>Even From Demo</h1>
        <hr/>
        <div>
          <h1> </h1>
          <TtaEventFrom1 />
        </div>
        <div>
          <h1> </h1>
       <TtaEventForm2/>
        </div>
        <div>
          <h1> </h1>
     <TtaEvenForm3 />
        </div>
        <div>
          <h1> </h1>
        <TtaEventFrom4 />
        </div>
        <div>
          <h1> </h1>
       <TtaEventFrom5 />
        </div>
      </div>
    );
  }
}

export default TtaApp;