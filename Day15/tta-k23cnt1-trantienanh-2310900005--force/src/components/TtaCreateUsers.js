import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function TtaCreateUsers() {
  // Khởi tạo state
  const [TtaFullName, setTtaFullName] = useState('');
  const [TtaEmail, setTtaEmail] = useState('');
  const [TtaPhone, setTtaPhone] = useState(0);
  const [TtaActive, setTtaActive] = useState(true);

  // API post
  const TtaCreateUserApi = "https://67d8d4bb00348dd3e2a85d0a.mockapi.io/tta-k23cnt1_2310900005/Tta_students";

  // Sử dụng useNavigate để điều hướng
  const navigate = useNavigate();

  // Khi submit form
  const TtaHandleSubmit = (event) => {
    event.preventDefault();
    console.log("TtaActive:", TtaActive);
    let TtaNewUser = { TtaFullName, TtaEmail, TtaPhone, TtaActive };
    console.log(TtaNewUser);

    // Ghi dữ liệu vào API
    axios
      .post(TtaCreateUserApi, TtaNewUser)
      .then(() => {
        alert("Người dùng đã được tạo thành công!");
        navigate('/DSUsers');             // Điều hướng về danh sách người dùng
        window.location.reload();         // Làm mới toàn bộ trang (hoặc có thể gửi tín hiệu qua context hoặc state)
      })
      .catch((error) => console.log("Lỗi khi tạo:", error));

  };

  // Hàm xử lý quay lại
  const TtaHandleBack = () => {
    navigate('/DSUsers'); // Điều hướng về danh sách người dùng
  };

  return (
    <div className='tta-create-users'>
      <h2>Thêm mới Users</h2>
      <hr />
      <form>
        <div className='mb-1'>
          <label htmlFor="TtaFullName">FullName</label>
          <input
            type='text'
            name='TtaFullName'
            id="TtaFullName"
            value={TtaFullName}
            onChange={(ev) => setTtaFullName(ev.target.value)}
          />
        </div>
  
        <div className='mb-1'>
          <label htmlFor="TtaEmail">Email</label>
          <input
            type='text'
            name='TtaEmail'
            id="TtaEmail"
            value={TtaEmail}
            onChange={(ev) => setTtaEmail(ev.target.value)}
          />
        </div>
  
        <div className='mb-1'>
          <label htmlFor="TtaPhone">Phone</label>
          <input
            type='text'
            name='TtaPhone'
            id="TtaPhone"
            value={TtaPhone}
            onChange={(ev) => setTtaPhone(ev.target.value)}
          />
        </div>
  
        <div className='mb-1'>
          <label>Active</label>
          <div className="radio-group">
            <input
              type='radio'
              name='TtaActive'
              id="TtaActive_hd"
              value={'true'}
              onChange={(ev) => setTtaActive(ev.target.value === 'true')}
            />
            <label htmlFor="TtaActive_hd"> Hoạt động </label>
  
            <input
              type='radio'
              name='TtaActive'
              id="TtaActive_kh"
              value={'false'}
              onChange={(ev) => setTtaActive(ev.target.value === 'false')}
            />
            <label htmlFor="TtaActive_kh"> Khóa </label>
          </div>
        </div>
  
        <div className="button-group">
          <button className='btn btn-primary' onClick={TtaHandleSubmit}>Create</button>
          <button className='btn btn-secondary' onClick={TtaHandleBack}>Back</button>
        </div>
      </form>
    </div>
  );
}
