import React, { Component } from 'react';
import TtaUseRef from './components/TtaUseRef';
import TtaUseReducer from './components/TtaUseReducer';
import TtaUseCallBack from './components/TtaUseCallBack';
import TtaUseMemo from './components/TtaUseMemo';

class TtaApp extends Component {
  render() {
    return (
      <div>
        <div className=' alert alert-danger'>
           <TtaUseRef />
        </div>
       <div className=' alert alert-primary'>

        <TtaUseReducer />
       </div>
       <div className=' alert alert-danger'> 
        <TtaUseCallBack />
       </div>
       <div className=' alert alert-primary'> 
         <TtaUseMemo />
       </div>
        
       
      
      </div>
    );
  }
}

export default TtaApp;