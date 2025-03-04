import React, { Component } from 'react';

class TtaReactArray extends Component {
    render() {
        const numbers = [1, 2, 3, 4, 5];
        const doubled = numbers.map((numbers) => numbers * 2);
        console.log(doubled); 
        return (
            <div className='alert alert-danger'>
                <h2> Danh sách số </h2>
                <ul>{doubled}</ul>
            </div>
        );
    }
}

export default TtaReactArray;