import React, { useState } from 'react';
import TtaAccountList from './components/TtaAccountList';
import TtaAccountAdd from './components/TtaAccountAdd';

function TtaApp() {
  // Khai báo state để quản lý danh sách sinh viên
  const [listStudent, setListStudent] = useState([
    { ttaId: "SV01", ttafullName: "Trần Tiến Anh", ttaEmail: "tienanhtran755@gmail.com", ttaAmount: "500.000 VND" },
    { ttaId: "SV02", ttafullName: "Nguyễn Ngọc Hiếu", ttaEmail: "bnguyen@gmail.com", ttaAmount: "750.000 VND" },
    { ttaId: "SV03", ttafullName: "Lê Ngọc Mai", ttaEmail: "cle@gmail.com", ttaAmount: "1.200.000 VND" },
  ]);

  // Hàm thêm sinh viên mới
  const handleAddStudent = (newStudent) => {
    setListStudent([...listStudent, newStudent]); // Thêm sinh viên vào danh sách
  };

  return (
    <div className="App container py-5">
      {/* Tiêu đề */}
      <h1
        className="text-center text-white mb-4 py-3"
        style={{
          background: 'linear-gradient(135deg, #c3cfe2, #a1c4fd)',
          borderRadius: '12px',
          boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
        }}
      >
        💰 Quản Lý Sinh Viên & Số Tiền Đóng
      </h1>

      {/* Chia hàng 2 bên */}
      <div className="row">
        {/* Cột danh sách sinh viên */}
        <div className="col-md-7 mb-4">
          <TtaAccountList students={listStudent} />
        </div>

        {/* Cột form thêm sinh viên */}
        <div className="col-md-5 mb-4">
          <TtaAccountAdd onAddStudent={handleAddStudent} />
        </div>
      </div>
    </div>
  );
}

export default TtaApp;
