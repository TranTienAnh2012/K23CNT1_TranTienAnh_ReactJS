import React, { useState } from 'react';

export default function TtauseStateoficel() {
  // ✅ Mảng sinh viên
  const listStudent = [
    { ttaId: "SV01", ttaStudentName: "Tran Tien Anh", ttaAge: 19, ttaGender: "Nam", ttaBirtday: "20/12/2005", ttaBirtPlace: "NinhBinh", ttaAddress: "Toa VCN, 25 Vu Ngoc Phan" },
    { ttaId: "SV02", ttaStudentName: "Nguyen Ngoc Hien", ttaAge: 20, ttaGender: "Nam", ttaBirtday: "20/12/2005", ttaBirtPlace: "HaNoi", ttaAddress: "Toa VCN, 25 Vu Ngoc Phan" },
    { ttaId: "SV03", ttaStudentName: "Nguyen Cong Tung", ttaAge: 20, ttaGender: "Nam", ttaBirtday: "20/12/2005", ttaBirtPlace: "ThaiBinh", ttaAddress: "Toa VCN, 25 Vu Ngoc Phan" },
    { ttaId: "SV04", ttaStudentName: "Nguyen Ngoc Hieu", ttaAge: 20, ttaGender: "Nam", ttaBirtday: "20/12/2005", ttaBirtPlace: "TPHoChiMinh", ttaAddress: "Toa VCN, 25 Vu Ngoc Phan" },
    { ttaId: "SV05", ttaStudentName: "Nguyen Ngoc Anh", ttaAge: 20, ttaGender: "Nữ", ttaBirtday: "20/12/2005", ttaBirtPlace: "BacNinh", ttaAddress: "Toa VCN, 25 Vu Ngoc Phan" },
  ];

  // ✅ Khai báo state quản lý danh sách
  const [TtaStudent, setTtaStudent] = useState(listStudent);

  let TtaElemen = TtaStudent.map((student,index )=> (
    <tr key={student.ttaId}>
      <td>{index + 1}</td>
      <td>{student.ttaId}</td>
      <td>{student.ttaStudentName}</td>
      <td>{student.ttaAge}</td>
      <td>{student.ttaGender}</td>
      <td>{student.ttaBirtday}</td>
      <td>{student.ttaBirtPlace}</td>
      <td>{student.ttaAddress}</td>
      <td>
        <button className='btn btn-primary mx-2' >Edit</button>
        <button className='btn btn-primary mx-2'onClick={() => handleDelete(student.ttaId)}>Delete</button>
      </td>
    </tr>
  ))
  const handleDelete = (id) => {
    const newList = TtaStudent.filter(student => student.ttaId !== id);
    setTtaStudent(newList); // Cập nhật lại danh sách mới (không có SV03)
  };
  
  return (
    <div>
      <h2>Danh sách sinh viên</h2>
      <table border="1" cellPadding="10" cellSpacing="0"  class="table table-striped-columns">
        <thead>
          <tr>
            <th>STT</th>
            <th>Mã SV</th>
            <th>Họ Tên</th>
            <th>Tuổi</th>
            <th>Giới tính</th>
            <th>Ngày sinh</th>
            <th>Nơi sinh</th>
            <th>Địa chỉ</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
                {TtaElemen}
        </tbody>
      </table>
    </div>
  );
}
