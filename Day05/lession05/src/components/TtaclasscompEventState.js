import React, { Component } from 'react';

class TtaclasscompEventState extends Component {
    constructor(props){
        super(props);
        this.state ={
            ttafullName: "Tran Tien Anh",
            ttaAge: 19,
        }
    }
    //ham xu ly 
    ttaEventHandleclick1 = () => {
        //lay du lieu trong state
        alert("FullName: "+ this.state.ttafullName + "\n Age: " + this.state.ttaAge);    }
    render() {
        return (
            <div className='alert alert-danger' >
                <button className='btn btn-primary' onClick={this.ttaEventHandleclick1}>
                     Button 1 - Dữ liệu trong state 
                </button>
                
           
            </div>
        );
    }
}

export default TtaclasscompEventState;