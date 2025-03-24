import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import TtaHome from './TtaHome';
import TtaListUsers from './TtaListUsers';
import TtaCreateUsers from './TtaCreateUsers';
import TtaEditUsers from './TtaEditUsers';
// import './TtaNavBar.css'; // Import file CSS

function TtaNavBar() {
  return (
    <Router>
      <div className="container">
        {/* Thanh điều hướng */}
        <nav className="TtaNavBar">
          <ul className="nav-links">
            {/* Logo với hình ảnh */}
                                    <li>
            
                                        <Link to="/">
                                            <img
                                                src="https://i.pinimg.com/736x/d8/d6/f9/d8d6f98b87c720b2ab2f675af980faa0.jpg"
                                                alt="Logo"
                                                className="tta-logo"
                                            />
                                        </Link>
            
                                    </li>
            
            <li><Link to="/" className="nav-item">🏠 Trang Chủ</Link></li>
            <li><Link to="/DsUsers" className="nav-item">📋 Danh Sách Users</Link></li>
            <li><Link to="/TMUsers" className="nav-item">➕ Thêm Mới</Link></li>
          </ul>
        </nav>

        {/* Nội dung chính */}
        <main className="content">
          <Routes>
            <Route path="/" element={<TtaHome />} />
            <Route path="/DsUsers" element={<TtaListUsers />} />
            <Route path="/TMUsers" element={<TtaCreateUsers />} />
            <Route path="/EditUser/:id" element={<TtaEditUsers />} />

          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default TtaNavBar;
