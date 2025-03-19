import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import TtaHome from './TtaHome';
import TtaListUsers from './TtaListUsers';
import TtaCreateUsers from './TtaCreateUsers';
import TtaEditUsers from './TtaEditUsers'; // Đã sửa lỗi import
// import './TtaStyles.css'; // Import file CSS đã thiết kế

function TtaNavBar() {
    return (
        <Router>
            <div>
                {/* Thanh điều hướng */}
                <nav className="tta-navbar">
                    <ul>
                        <li><Link to="/">Trang Chủ</Link></li>
                        <li><Link to="/DSUsers">Danh Sách Users</Link></li>
                        <li><Link to="/TMUsers">Thêm Mới Users</Link></li>
                    </ul>
                </nav>

                {/* Nội dung chính */}
                <main>
                    <Routes>
                        <Route path="/" element={<TtaHome />} />
                        <Route path="/DSUsers" element={<TtaListUsers />} />
                        <Route path="/TMUsers" element={<TtaCreateUsers />} />
                        <Route path="/EditUser/:id" element={<TtaEditUsers />} />
                    </Routes>
                </main>

                {/* Footer */}
                <footer className="tta-footer">
                    <p>&copy; 2025 TTA Project. All rights reserved.</p>
                </footer>
            </div>
        </Router>
    );
}

export default TtaNavBar;
