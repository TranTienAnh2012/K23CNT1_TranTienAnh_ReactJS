// import React, { Component } from 'react';

// class TtaEventFrom4 extends Component {
//     render() {
//         return (
//             <div>
                
//             </div>
//         );
//     }
// }

// export default TtaEventFrom4;
import React, { Component } from 'react';

class TtaEventFrom4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hobbies: [],
            TtaGioitinh: 'Nam'
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

    handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        this.setState((prevState) => {
            if (checked) {
                return { hobbies: [...prevState.hobbies, value] };
            } else {
                return { hobbies: prevState.hobbies.filter(hobby => hobby !== value) };
            }
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        alert('Bạn đã chọn giới tính: ' + this.state.TtaGioitinh + '\nSở thích của bạn: ' + this.state.hobbies.join(", "));
    };

    render() {
        return (
            <div className='alert alert-success'>
                <h2>Form input - radio và checkbox</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Giới tính:</label>
                        <br/>
                        <input 
                            type='radio' 
                            name='TtaGioitinh' 
                            value="Nam" 
                            id='TtaNam' 
                            checked={this.state.TtaGioitinh === "Nam"} 
                            onChange={this.ttaHandleChange} 
                        />
                        <label htmlFor='TtaNam'>Nam</label>
                        <br/>
                        <input 
                            type='radio' 
                            name='TtaGioitinh' 
                            value="Nu" 
                            id='TtaNu' 
                            checked={this.state.TtaGioitinh === "Nu"} 
                            onChange={this.ttaHandleChange} 
                        />
                        <label htmlFor='TtaNu'>Nữ</label>
                          <br/>
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
                      <br/>
                    <div>
                        <label>Sở thích:</label>
                        <br/>
                        <input 
                            type='checkbox' 
                            name='hobby' 
                            value="Đọc sách" 
                            onChange={this.handleCheckboxChange} 
                        /> Đọc sách
                           <br/>
                        <input 
                            type='checkbox' 
                            name='hobby' 
                            value="Nghe nhạc" 
                            onChange={this.handleCheckboxChange} 
                        /> Nghe nhạc
                           <br/>
                        <input 
                            type='checkbox' 
                            name='hobby' 
                            value="Du lịch" 
                            onChange={this.handleCheckboxChange} 
                        /> Du lịch
                    </div>
                    <br/>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        );
    }
}

export default TtaEventFrom4;
