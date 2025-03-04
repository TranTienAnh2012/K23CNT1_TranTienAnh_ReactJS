import React, { Component } from 'react';

class TtaReactArray04 extends Component {
    render() {
        const TtaNumbers = ["Tam", "Tung", "Hieu", "Sang", "Trong"];
        const TtaElement = TtaNumbers.map((item) =>{
            return <li>{item}</li>
        })
        return (
            <div>
                <h2> Danh sách tên người</h2>
                <ul>{TtaElement}</ul>
            </div>
        );
    }
}

export default TtaReactArray04;