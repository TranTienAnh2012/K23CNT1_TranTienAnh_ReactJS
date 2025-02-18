import './App.css';
import Ttaclassconp2 from './components/Ttaclassconp2';


import Ttacodega from './components/Ttacodega';
import TtaFunConp1 from './components/TtaFunConp1';


function App() {
  const users = {
    fullName: 'Tran Tien Anh',
    age: "20",
    phone: "234567890"
  }

  return (
    <div className="container border mt-3 bg-red">  
      <div className="inner-container">
        <Ttacodega name="Tran Tien Anh" address="25 vu ngoc phan" company="devmaster" />
      </div>
      <hr />
      <div className="inner-container">
        <Ttacodega name="Tran Hai Minh" address="25 vu ngoc phan" company="devmaster" />
      </div>
      <hr />
      <div className='alert alert-info'>
        <TtaFunConp1 renderInfo={users} />
      </div>
      <hr/>
        <div className='alert alert-primary'>
        <Ttaclassconp2 />
    </div>
    {/* chuyen du lieu tu state ve components */}
    <Ttaclassconp2 renderName ="K23CNT1" renderUsers={users}/>
    </div>
  );
}

export default App;
