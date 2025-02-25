import React, { Component } from 'react';

class TtaEventFrom1 extends Component {
    constructor(props){
        super(props)
            this.state ={
                ttaStudenName:"Tran Tien Anh",
            }
        
    }
    //ham xu ly du lieu tren text box
    TtaHendelchange = (event) =>{
        this.setState({
            ttaStudenName:event.target.value,
        })
    }
    //khi submit
    ttaHandelsubmit =(ev) =>{
        alert('Xin chao '+this.state.ttaStudenName);
    }
    render() {
        return (
            <div className='alert alert-info'>
                <h2>Form input </h2>
                <foem onSubmit={this.ttaHandelsubmit}>
                    <label htmlFor='ttaStudenName'>
                        <input type='text' name='ttaStudenName' id='ttaStudenName' 
                        value={this.state.ttaStudenName} 
                        onChange={this.ttaStudenName}/>
                        
                    </label>
                    <button className='btn btn-primary'> Click to here</button>
                </foem>
            </div>
        );
    }
}

export default TtaEventFrom1;