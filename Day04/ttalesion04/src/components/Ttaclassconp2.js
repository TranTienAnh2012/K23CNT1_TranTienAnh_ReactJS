import React, { Component } from 'react';

class Ttaclassconp2 extends Component {
  constructor(props){
    super(props);
 // Khởi tạo state đúng cách
 this.state = {
    fullName: "Tien Anh",
    Age: 19,
    Phone: "1234567890"
  };
  }
  // Ham xu ly su kien
  ChangeInfo = (ev)=>{
    //cap nhat state
    this.setState({
        fullName: "Tran Tien Anh"
  });
  }
  render() {
    // let users = this.props.renderUsers;
    return (
      <div className='atert atert-success'>
        <h2>Trinh bay du lieu tu state</h2>
        <p>Info state (fullName): {this.state.fullName}</p>
        <p>Info state (Age): {this.state.Age}</p>
        <p>Info state (Phone): {this.state.Phone}</p>
        <hr/>
        <button className='btn btn-primary' onClick={this.ChangeInfo}>Change Info</button>
        <hr/>
        <p>Name: {this.props.renderName}</p>
        <p>FullName: {this.props.renderUsers ?this.props.renderUsers.fullName:''}</p>
        <p>Age: {this.props.renderUsers ?this.props.renderUsers.age:''}</p>
        <p>Phone: {this.props.renderUsers ?this.props.renderUsers.phone:''}</p>
   
      </div>
    );
  }
}

export default Ttaclassconp2;