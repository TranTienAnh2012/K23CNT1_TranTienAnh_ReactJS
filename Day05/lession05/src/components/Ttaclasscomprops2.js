import React, { Component } from 'react';

class Ttaclasscomprops2 extends Component {
    //ham xu ly
    ttaEventHandleclick1 = () =>{
        alert ("hello..."+ this.props.ttaRenderNameTitle);
    }
    render() {
        return (
            <div className='alert alert-danger'>
                <button className='btn btn-primary' onClick={this.ttaEventHandleclick1}>Button 1</button>
            </div>
        );
    }
}

export default Ttaclasscomprops2;