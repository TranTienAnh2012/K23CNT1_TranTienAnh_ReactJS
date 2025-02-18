// import React, { Component } from 'react';

// export default class Ttaclasscom extends Component {
//   constructor(props) { // ✅ Đặt constructor đúng vị trí
//     super(props); // ✅ Dùng super(props), không phải super(this.props)

//     this.state = {
//       fullName: "Chungg Chung",
//       age: 40
//     };
//   }

//   render() {
//     return (
//       <div>
//         <h2>Họ và Tên: {this.state.fullName}</h2>
//         <p>Tuổi: {this.state.age}</p>
//       </div>
//     );
//   }
// }
import React, { Component } from 'react';

class Ttaclasscom extends Component {
  constructor(props){
    super(props);
    //khoi tao state
    this.this.state = {
      fullName: "Tien Anh ",
      Age: 19,
      Phone:  "1234567890-"
    }
  }
  render() {
    return (
      <div className='atert atert-success'>
        <h2>Trinh bay du lieu tu state</h2>
        <p>Info state (fullName): {this.state.fullName}</p>
      </div>
    );
  }
}

export default Ttaclasscom;
