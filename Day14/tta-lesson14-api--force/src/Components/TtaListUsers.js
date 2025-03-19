import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function TtaListUsers() {
  const [TtaListUsers, setTtaListUsers] = useState([]);
  const TtaApiOnline = "https://67d8d4bb00348dd3e2a85d0a.mockapi.io/k23cnt1_trantienanh/Tta_students";

  // Fetch dữ liệu từ API
  useEffect(() => {
    axios.get(TtaApiOnline)
      .then((response) => setTtaListUsers(response.data))
      .catch((error) => console.log("Lỗi:", error));
  }, []);

  // Hàm xử lý xóa người dùng (thêm tiền tố Tta)
  const TtaHandleDelete = (TtaId) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa người dùng này không?")) {
      axios.delete(`${TtaApiOnline}/${TtaId}`)
        .then(() => {
          // Cập nhật danh sách người dùng sau khi xóa
          setTtaListUsers((prevUsers) => prevUsers.filter((user) => user.TtaId !== TtaId));
        })
        .catch((error) => console.log("Lỗi khi xóa:", error));
    }
  };

  // Tạo danh sách người dùng
  const TtaElemenUsers = TtaListUsers.map((Tta_Item) => (
    <tr key={Tta_Item.TtaId}>
      <td>{Tta_Item.TtaId}</td>
      <td>{Tta_Item.TtaFullName}</td>
      <td>{Tta_Item.TtaEmail}</td>
      <td>{Tta_Item.TtaPhone}</td>
      <td>{Tta_Item.TtaAcTive ? 'Hoạt động' : 'Khóa'}</td>
      <td>
        <Link to={`/EditUser/${Tta_Item.TtaId}`} className="btn btn-primary mx-2">Sửa</Link>
        <button
          onClick={() => TtaHandleDelete(Tta_Item.TtaId)}
          className="btn btn-danger mx-2"
        >
          Xóa
        </button>
      </td>
    </tr>
  ));

  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>FullName</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Active</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {TtaElemenUsers}
        </tbody>
      </table>
    </div>
  );
}
