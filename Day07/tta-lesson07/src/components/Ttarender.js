import React, { Component } from 'react';
import TtaLogincontrol from './TtaLogincontrol';

class Ttarender extends Component {
    constructor (props){
        super(props);
        this.state ={
            isLoggedin: false
        }
    }
    //thiết lập nút cho login {ham xu ly}
    ttaHandlelogin =(ev) => {
        ev.preventDefault();
        this.setState({
            isLoggedin:true
        })
    }
    //thiết lập nút cho logout {ham xu ly}
    ttaHandlelogout =(ev) => {
        ev.preventDefault();
        this.setState({
            isLoggedin:false
        })
    }

    render() {
        return (
            <div className='text-center'>
                <TtaLogincontrol isLoggedin={this.state.isLoggedin} />
                {
                    this.state.isLoggedin ?
                    <button className='btn btn-danger' onClick={this.ttaHandlelogout} >Logout</button>
                    : <button className='btn btn-primary' onClick={this.ttaHandlelogin}>Login</button>
                }
            </div>
        );
    }
}

export default Ttarender;