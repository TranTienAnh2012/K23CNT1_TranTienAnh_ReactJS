import React, { Component } from 'react';
import TtaNavBar from './Components/TtaNavBar';

class TtaApp extends Component {
  render() {
    return (
      <div className='container border my-3 p-3'>
        {/* <h2 className='alert alert-danger'>K23CNT1 - Tran Tien Anh - 2310900005 - Bai thuc hanh tong hop</h2>
        <hr/> */}
        <TtaNavBar />
      </div>
    );
  }
}

export default TtaApp;