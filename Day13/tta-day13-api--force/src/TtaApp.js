import React, { Component } from 'react';
import TtaReactApiLocal from './components/TtaReactApiLocal';
import TtaReactMockapi from './components/TtaReactMockapi';
import TtaCreateMockApi from './components/TtaCreateMockApi';

class TtaApp extends Component {
  render() {
    return (
      <div className='container border my-3 p-3'>
        <h2> ReactJs - Api - Tran Tien Anh</h2>
        <hr/>
        <TtaReactApiLocal />
        <hr/>
        <h2>Đọc dữ liệu từ mốc Api (mockapi.io) </h2>
        <hr/>
        <TtaReactMockapi />
        <TtaCreateMockApi/>
      </div>
    );
  }
}

export default TtaApp;