import React, { Component } from 'react';

class TtafuncEven1 extends Component {
TtabuttonclickEven1 =() =>{
        alert("button 1 clicked");
    };
    TtabuttonclickEven2 =() =>{
        alert("button 2 clicked");
    };
    render() {
        return (
            <div className='alert alert-danger'> 
                <button className='btn btn-primary mx-1' onClick={this.TtabuttonclickEven1} >button1 </button>
                <button className='btn btn-primary mx-1'onClick={this.TtabuttonclickEven2}>button2 </button>
            </div>
        );
    }
}

export default TtafuncEven1;