import React, { Component } from 'react';

class TtaEvenForm3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            TtaGioitinh: 'Nam',
        };
    }
    
    // Hàm xử lý 
    ttaHandleChange = (event) => {
        this.setState({
            TtaGioitinh: event.target.value
        }, () => {
            alert('Giới tính của bạn là: ' + this.state.TtaGioitinh);
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        alert('Bạn đã chọn giới tính: ' + this.state.TtaGioitinh);
    };

    render() {
        return (
            <div className='alert alert-success'>
                <h2>Form input - radio</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Giới tính:</label>
                        <input 
                            type='radio' 
                            name='TtaGioitinh' 
                            value="Nam" 
                            id='TtaNam' 
                            checked={this.state.TtaGioitinh === "Nam"} 
                            onChange={this.ttaHandleChange} 
                        />
                        <label htmlFor='TtaNam'>Nam</label>
                        
                        <input 
                            type='radio' 
                            name='TtaGioitinh' 
                            value="Nu" 
                            id='TtaNu' 
                            checked={this.state.TtaGioitinh === "Nu"} 
                            onChange={this.ttaHandleChange} 
                        />
                        <label htmlFor='TtaNu'>Nữ</label>
                        
                        <input 
                            type='radio' 
                            name='TtaGioitinh' 
                            value="Khac" 
                            id='TtaKhac' 
                            checked={this.state.TtaGioitinh === "Khac"} 
                            onChange={this.ttaHandleChange} 
                        />
                        <label htmlFor='TtaKhac'>Khác</label>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        );
    }
}

export default TtaEvenForm3;
