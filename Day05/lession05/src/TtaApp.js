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
import TtafuncEven from './components/TtafuncEven';
import TtafuncEven1 from './components/TtafuncEven1';
import TtaclassfuncEven from './components/TtaclassfuncEven';
import Ttaclassfuncprops from './components/Ttaclassfuncprops';
import Ttaclasscomprops2 from './components/Ttaclasscomprops2';
import TtaclasscompEventState from './components/TtaclasscompEventState';



class TtaApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      ttaNoiDung:"Chua co noi dung "
    }
  }
  // Ham xu ly su kien khi compornen con chuyen du lieu len 
  TTAhandelonTtaDatatoapp = (content) => {
    alert(content);
    this.setState()
  }
  render() {
    return (
      <div className='container border mt-3'>
        <h1 className='text-center alert alert-primary '>K23CNT1 TranTrienAnh</h1>
        <hr/>
          <div>
            <h2>function components even</h2>
            <TtafuncEven />
          </div>
        <hr/>
          <div>
            <h2>function components even props</h2>
            <Ttaclassfuncprops ttaRenderName ="Tran Tien Anh" />
          </div>
        <hr/>
          <div>
            <h2> Class components even props</h2>
              <Ttaclasscomprops2 ttaRenderNameTitle ="welcome to Tien Anh" />
          </div>
        <hr/>
          <div>
            <h2> Class components even state</h2>
            <TtaclasscompEventState />
          </div>
        <hr/>
          <div>
            <h2>class components function 2</h2>
            <TtafuncEven1 />
          </div>
        <hr/>
          <div>
            <h1>{this.state.ttaNoiDung}</h1>
            <h2>class component even post data to app</h2>
            <TtaclassfuncEven TTAonTtaDatatoapp = {this.TTAhandelonTtaDatatoapp}/>
          </div>
      </div>
    );
  }
}

export default TtaApp;
