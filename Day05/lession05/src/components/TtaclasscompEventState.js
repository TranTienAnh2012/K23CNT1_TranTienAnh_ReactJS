import React, { Component } from 'react';

class TtaclasscompEventState extends Component {
    constructor(props){
        super(props);
        this.state ={
            ttafullName: "Tran Tien Anh",
            ttaAge: 19,
            Test3: "Môn này khá khó",
            Sdt: "0345862097", 
           
        }
    }
    //ham xu ly 
    ttaEventHandleclick1 = () => {
        //lay du lieu trong state
        alert("FullName: "+ this.state.ttafullName + "\n Age: " + this.state.ttaAge);   
     }
     
     ttaEventHandleclick02 =() =>{
        alert("Test3: "+ this.state.Test3 + "\n Sdt: " + this.state.Sdt);
     }
    render() {
        return (
            <div className='alert alert-danger mx-22' >
                <button className='btn btn-primary' onClick={this.ttaEventHandleclick1}>
                     Button 1 - Dữ liệu trong state 
                </button>
                
                <button className='btn btn-primary mx-2'  onClick={this.ttaEventHandleclick02}> 
                    Button 2 - Test dữ liệu xem có lên ko 
                </button>
                
           
            </div>
        );
    }
}

export default TtaclasscompEventState;