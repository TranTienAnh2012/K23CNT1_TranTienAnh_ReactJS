import React, { Component } from 'react';

class TtaReactArray02 extends Component {

    render() {
        const numbers = [1, 2, 3, 4, 5];
        const listItem =numbers.map((numbers) =>
            <li>{numbers}</li>
        );
        return (
            <div className='alert alert-danger'>
                <h2>Danh sach so</h2>
                <ul>{listItem}</ul>      
            </div>
        );
    }
}

export default TtaReactArray02;