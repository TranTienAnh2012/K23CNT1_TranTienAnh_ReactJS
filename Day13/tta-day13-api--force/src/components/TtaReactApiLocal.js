import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function TtaReactApiLocal() {
    // Tạo state để lưu trữ dữ liệu
    const [TtaListuser, setTtaListuser] = useState([]);

    // API URL
    const apiUrl = "http://localhost:3001/users";

    // Lấy danh sách từ API
    useEffect(() => {
        axios
            .get(apiUrl)
            .then((Ttaresponse) => {
                setTtaListuser(Ttaresponse.data);
            })
            .catch((error) => {
                console.log("Lỗi:", error);
            });
    }, []); // Chỉ chạy một lần khi component mount

    return (
        <div>
            <h2>Đọc dữ liệu từ API Local</h2>
            <table className='table table-bordered'>
              <thead>
                <tr>
                    <th>FullName</th>
                    <th>Age</th>
                    <th>Class</th>
                </tr>
              </thead>
              <tbody>
                {
                  TtaListuser.map((TtaItem, index)=>{
                    return (
                       <tr>
                          <td>{TtaItem.fullName}</td>
                          <td>{TtaItem.age}</td>
                          <td>{TtaItem.class}</td>
                       </tr>
                    )
                  })
                }
              </tbody>
            </table>
          
        </div>
    );
}
