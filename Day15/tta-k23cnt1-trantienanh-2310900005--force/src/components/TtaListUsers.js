import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function TtaListUsers() {
  const [TtaListUsers, setTtaListUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // Tìm kiếm
  const [currentPage, setCurrentPage] = useState(1); // Phân trang
  // const [sortOrder, setSortOrder] = useState("asc"); // Sắp xếp (asc / desc)

  const usersPerPage = 5; // Số lượng user mỗi trang
  const TtaApiOnline =
    "https://67d8d4bb00348dd3e2a85d0a.mockapi.io/tta-k23cnt1_2310900005/Tta_students";

  // Fetch dữ liệu từ API
  useEffect(() => {
    axios
      .get(TtaApiOnline)
      .then((response) => {
        
        const sortedData = response.data.sort((a, b) => {
          const nameComparison = a.TtaFullName.localeCompare(b.TtaFullName);
          if (nameComparison !== 0) {
            return nameComparison; // Sắp xếp theo tên trước
          }
          return parseInt(a.TtaId) - parseInt(b.TtaId); // Nếu trùng tên, sắp xếp theo ID
        });
        setTtaListUsers(sortedData);
      })
      .catch((error) => console.log("Lỗi:", error));
  }, []);

  // Xóa người dùng
  const TtaHandleDelete = (TtaId) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa người dùng này không?")) {
      axios.delete(`${TtaApiOnline}/${TtaId}`).then(() => {
        setTtaListUsers((prevUsers) =>
          prevUsers.filter((user) => user.TtaId !== TtaId)
        );
      });
    }
  };

  // Lọc danh sách theo từ khóa tìm kiếm
  const filteredUsers = TtaListUsers.filter((user) =>
    user.TtaFullName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Phân trang
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  // Danh sách người dùng hiển thị
  const TtaElemenUsers = currentUsers.map((Tta_Item) => (
    <tr key={Tta_Item.TtaId}>
      <td>{Tta_Item.TtaId}</td>
      <td>{Tta_Item.TtaFullName}</td>
      <td>{Tta_Item.TtaEmail}</td>
      <td>{Tta_Item.TtaPhone}</td>

      <td>
        <span className={`badge ${Tta_Item.TtaAcTive ? "bg-success" : "bg-danger"}`}>
          {Tta_Item.TtaAcTive ? "Hoạt động" : "Khóa"}
        </span>
      </td>
      
      <td>
        <Link to={`/EditUser/${Tta_Item.TtaId}`} className="btn btn-primary mx-2">
          Sửa
        </Link>
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
      <div style={{
        border: "none",
        textAlign: "center"

      }}>

        {/* Ô tìm kiếm */}
        <input
          style={{
            width: "300px",
            marginLeft: "63%",
            marginBottom: "10px"
          }}
          type="text"
          placeholder="Tìm kiếm theo tên...🔍"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="form-control"

        />
      </div>
      {/* Bảng danh sách */}
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
        <tbody>{TtaElemenUsers}</tbody>
      </table>

      {/* Phân trang */}
      <div className="text-center"
        style={{
          paddingTop: "40px"
        }}>
        <button
          className="btn btn-secondary mx-22"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          ⬅
        </button>

        <span> Trang {currentPage}</span>

        <button
          className="btn btn-secondary mx-2"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={indexOfLastUser >= filteredUsers.length}
        >
          ➡
        </button>
      </div>
    </div>
  );
}
