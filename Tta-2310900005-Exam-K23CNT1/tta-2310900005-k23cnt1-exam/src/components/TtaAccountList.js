import React from 'react';

export default function TtaAccountList({ students }) { // Nhận students từ props
  
  // Render danh sách sinh viên
  const TtaElemen = students.map((student, index) => (
    <tr key={index}>
      <td>{index + 1}</td>
      <td>{student.ttaId}</td>
      <td>{student.ttafullName}</td>
      <td>{student.ttaEmail}</td>
      <td>{student.ttaAmount}</td>
    </tr>
  ));

  return (
    <div className="card shadow-sm border-0 rounded-4 p-3 mb-4">
<h3
  className="text-center text-white mb-4 py-2"
  style={{
    background: 'linear-gradient(135deg, #89f7fe, #66a6ff)', // Màu xanh dịu nhẹ
    borderRadius: '12px', // Bo góc mềm
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)', // Đổ bóng nhẹ
  }}
>
  Danh sách sinh viên
</h3>


      <table className="table table-striped table-hover">
        <thead className='table-primary text-center'>
          <tr>
            <th>STT</th>
            <th>Mã SV</th>
            <th>Họ tên</th>
            <th>Email</th>
            <th>Số tiền</th>
          </tr>
        </thead>
        <tbody>
          {TtaElemen}
        </tbody>
      </table>
    </div>
  );
}
