import React, { Component } from 'react';

class TtaclassfuncEven extends Component {
    constructor(props) {
        super(props); // Gọi super(props) để sử dụng `this.props`
        this.state={
            ttaNoiDung:"Chua co noi dung",
        }
           
    
    }
    // Hàm xử lý sự kiện
    TtabuttoncompHandleClick=()=> {
        this.props.TTAonTtaDatatoapp("Dữ liệu từ component con - TtabuttoncompHandleClick");
    }

    render() {
        return (
            <div className='alert alert-success'>
                <button className='btn btn-primary' onClick={this.TtabuttoncompHandleClick}>
                    Button 1 - Chuyển dữ liệu lên App
                </button>
            </div>
        );
    }
}

export default TtaclassfuncEven;
