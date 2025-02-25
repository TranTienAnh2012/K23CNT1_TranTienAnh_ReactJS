import React, { Component } from 'react';

class TtaEventFrom5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            hobbies: [],
            TtaGioitinh: 'Nam',
            course: 'html'
        };
    }
    
    // Hàm xử lý thay đổi input text
    handleNameChange = (event) => {
        this.setState({ name: event.target.value });
    };

    // Hàm xử lý radio button
    ttaHandleChange = (event) => {
        this.setState({
            TtaGioitinh: event.target.value
        });
    };

    // Hàm xử lý checkbox
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

    // Hàm xử lý select option
    handleCourseChange = (event) => {
        this.setState({ course: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        alert(`Tên: ${this.state.name}\nGiới tính: ${this.state.TtaGioitinh}\nSở thích: ${this.state.hobbies.join(", ")}\nKhoá học: ${this.state.course}`);
    };

    render() {
        return (
            <div className='alert alert-success'>
                <h2>Form tổng hợp</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Họ và tên:</label>
                        <input 
                            type='text' 
                            value={this.state.name} 
                            onChange={this.handleNameChange} 
                        />
                    </div>
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
                    <div>
                        <label>Sở thích:</label>
                        <input 
                            type='checkbox' 
                            name='hobby' 
                            value="Đọc sách" 
                            onChange={this.handleCheckboxChange} 
                        /> Đọc sách
                        
                        <input 
                            type='checkbox' 
                            name='hobby' 
                            value="Nghe nhạc" 
                            onChange={this.handleCheckboxChange} 
                        /> Nghe nhạc
                        
                        <input 
                            type='checkbox' 
                            name='hobby' 
                            value="Du lịch" 
                            onChange={this.handleCheckboxChange} 
                        /> Du lịch
                    </div>
                    <div>
                        <label>Khoá học:</label>
                        <select value={this.state.course} onChange={this.handleCourseChange}>
                            <option value="html">HTML</option>
                            <option value="css">CSS</option>
                            <option value="js">JavaScript</option>
                            <option value="reactjs">ReactJS</option>
                        </select>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        );
    }
}

export default TtaEventFrom5;
