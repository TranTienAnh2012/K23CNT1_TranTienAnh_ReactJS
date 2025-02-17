// import logo from './logo.svg';


import './App.css';
import TtaClasscomponents from './components/TtaClasscomponents';
import TTafunction from './components/TTafunction';
import Ttajsx from './components/Ttajsx';

function ttaApp() {
  return (
    <div className="container border mt-3 bg-red">
         <h1> React day03</h1>
         <Ttajsx />
        <TTafunction />
        <TtaClasscomponents />
    </div>
  );
  
}

export default ttaApp;
