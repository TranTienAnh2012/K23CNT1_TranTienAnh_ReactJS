// import React from "react";
// import ReactDOM from "react-dom";  // Thêm import nếu dùng module
// function Member (props){
//     return(
//         <div className="member">
//             <h2>{props.name}</h2>
//             <p>Tuoi: {props.age}</p>
//         </div>
//     )
// };

// var memberlist = (
//     <div>
//         <Member name ="Tran Tien Anh" age ="19" />
//         <Member name ="Tran Hai Minh" age ="13" />
//     </div>
// );
// ReactDOM.render(
//     memberlist,
//     document.getElementById('Ttaroot')
// );
import React from 'react'

export default function Ttacodega(props) {
  return (
    <div>
        <h2>Demo: function components props</h2>
        <p> Lay du lieu tu props de hien thi</p>
        <p>Name: {props.name}</p>
        <p>address: {props.address}</p>
        <p>company: {props.company}</p>
        <p>note: {props.note}</p>
    </div>
  )
}

