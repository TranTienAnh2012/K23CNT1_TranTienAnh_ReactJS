import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function TtaReactMockapi() {
    //khoi tao state
    const [TtaListUsers, setTtaListUsers] = useState([])
    //api
    const TtaApiOnline ="https://67d8d4bb00348dd3e2a85d0a.mockapi.io/k23cnt1_trantienanh/Tta_users"
    //doc du lieu api bang axios 
    useEffect(() =>{
        axios
            .get(TtaApiOnline)
            .then((Tta_response)=>{
                setTtaListUsers(Tta_response.data)
            })
            .catch((error)=>{
                console.log("loi phat sinh");
            })
    },[])
    //view data 
    const TtaElemenUsers = TtaListUsers.map((Tta_item, index )=>{
        return (
            <tr>
                <td>{Tta_item.TtaId}</td>
                <td>{Tta_item.TtaFullName}</td>
                <td>{Tta_item.TtaAge}</td>
                <td>{Tta_item.TtaActive?'hoạt động':'khóa'}</td>
                <td>
                    <button>sửa</button>
                    <button>xóa</button>
                </td>
            </tr>
        )
    })
  return (
        <div className='alert alert-danger'>
            <h2>Danh Sách Dữ Liệu API LOCAL</h2>
            <table className='table table-bordered'>
              <thead>
                <tr>
                    <th>Id</th>
                    <th>FullName</th>
                    <th>Age</th>
                    <th>Active</th>
                    <th>Action</th>
                </tr>
              </thead>
              <tbody>
                    {
                        TtaElemenUsers
                    } 
              </tbody>
            </table>
        </div>
  )
}
