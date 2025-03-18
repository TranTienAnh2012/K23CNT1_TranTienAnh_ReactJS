//Them moi du lieu
import React, { useState } from 'react'
import axios from 'axios'
export default function TtaCreateMockApi() {
    // khởi tạo state
    const [TtaFullName,setTtaFullName] = useState('')
    const [TtaAge,setTtaAge] = useState(0)
    const [TtaActive,setTtaActive] = useState(true)

    // api post
    const TtaCreateUserApi = "https://67d8d4bb00348dd3e2a85d0a.mockapi.io/k23cnt1_trantienanh/Tta_users";

    // khi submit form
    const TtaHandleSubmit = (event)=>{
        event.preventDefault();
        console.log("TtaActive:",TtaActive);
        let TtaNewUser = {TtaFullName,TtaAge,TtaActive};
        console.log(TtaNewUser);

        // ghi dữ liệu vào api
        axios
            .post(TtaCreateUserApi, TtaNewUser)
            .then((Tta_response)=>{
                
            })
        
    }
  return (
    <div className='alert alert-info'>
        <h2>Thêm mới users</h2>
        <hr/>
        <form>
            <div className=' mb-1'>
                <label for="TtaFullName">Full Name</label>
                <input type='text' name='TtaFullName' id="TtaFullName" 
                    value={TtaFullName}
                    onChange={(ev)=>setTtaFullName(ev.target.value)} />
            </div>
            <div className=' mb-1'>
                <label for="TtaAge">Age</label>
                <input type='number' name='TtaAge' id="TtaAge" 
                    value={TtaAge}
                    onChange={(ev)=>setTtaAge(ev.target.value)} />
            </div>
            <div className=' mb-1'>
                <label for="TtaActive">Active</label>
                <input type='radio' name='TtaActive' id="TtaActive_hd" value={'true'} 
                    onChange={(ev)=>setTtaActive(ev.target.value)} />
                    <label for="TtaActive_hd"> Hoạt động</label>
                <input type='radio' name='TtaActive' id="TtaActive_kh" value={'false'} 
                    onChange={(ev)=>setTtaActive(ev.target.value)}/>
                    <label for="TtaActive_kh"> Khóa</label>
            </div>
            <button onClick={TtaHandleSubmit}>Create</button>
        </form>
    </div>
  )
}
