import React, { Component } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import TtaHome from './components/TtaHome';
import TtaGioiThieu from './components/TtaGioiThieu';
import TtaSanPham from './components/TtaSanPham';
import TtaTinTuc from './components/TtaTinTuc';
import TtaLienHe from './components/TtaLienHe';

class TtaApp extends Component {
  render() {
    return (
      <div>
             <div className='container border my-3'>
                <h1 className='alert alert-primary'>Tran Tien Anh React Router Demo</h1>
                <hr />
                {/* Menu dạng danh sách ul > li */}
                <p className='alert alert-danger'>Thực Hành với React Route Demo</p>
                <nav>
                  <ul className="list-unstyled">
                    <li><Link to="/" className="btn btn-link">Home</Link></li>
                    <li><Link to="/gioithieu" className="btn btn-link">Giới Thiệu</Link></li>
                    <li><Link to="/sanpham" className="btn btn-link">Sản Phẩm</Link></li>
                    <li><Link to="/tintuc" className="btn btn-link">Tin Tức</Link></li>
                    <li><Link to="/lienhe" className="btn btn-link">Liên Hệ</Link></li>
                  </ul>
                </nav>
                <hr />
                {/* Các route tương ứng */}
                <Routes>
                  <Route path="/" element={<TtaHome/>} />
                  <Route path="/gioithieu" element={<TtaGioiThieu />} />
                  <Route path="/sanpham" element={<TtaSanPham />} />
                  <Route path="/tintuc" element={<TtaTinTuc />} />
                  <Route path="/lienhe" element={<TtaLienHe />} />
                </Routes>
              </div>
      </div>
    );
  }
}

export default TtaApp;