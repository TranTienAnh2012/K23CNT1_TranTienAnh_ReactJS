import React, { useState } from 'react';

export default function TtaAccountAdd({ onAddStudent }) {
  const [formData, setFormData] = useState({
    ttaId: '',
    ttafullName: '',
    ttaEmail: '',
    ttaAmount: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.ttaId && formData.ttafullName && formData.ttaEmail && formData.ttaAmount) {
      onAddStudent(formData); // Gửi dữ liệu lên App
      setFormData({ ttaId: '', ttafullName: '', ttaEmail: '', ttaAmount: '' }); // Reset form
    } else {
      alert("Vui lòng nhập đầy đủ thông tin!");
    }

  };

  return (
    <div className="card p-3 my-3 shadow">
<h3
  className="text-center text-white fw-bold p-3 rounded-3 shadow mb-3"
  style={{ background: 'linear-gradient(135deg, #6a11cb, #2575fc)' }}
>
  Thêm sinh viên mới
</h3>


      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input type="text" name="ttaId" value={formData.ttaId} onChange={handleChange} placeholder="Mã sinh viên" className="form-control" />
        </div>
        <div className="mb-3">
          <input type="text" name="ttafullName" value={formData.ttafullName} onChange={handleChange} placeholder="Họ tên" className="form-control" />
        </div>
        <div className="mb-3">
          <input type="email" name="ttaEmail" value={formData.ttaEmail} onChange={handleChange} placeholder="Email" className="form-control" />
        </div>
        <div className="mb-3">
          <input
            type="text"
            name="ttaAmount"
            value={formData.ttaAmount}
            onChange={handleChange}
            placeholder="Số tiền đóng (VD: 1,000,000)"
            className="form-control"
          />
        </div>
        <div className="d-flex justify-content-center my-3">
  <button
    type="submit"
    className="btn fw-bold text-white border-0 px-4 py-2"
    style={{
      background: 'linear-gradient(135deg, #6a11cb, #2575fc)',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
      width: '200px', // Độ dài trung bình, có thể thay đổi theo ý bạn (ví dụ: 150px, 250px)
      textAlign: 'center'
    }}
  >
    Thêm mới
  </button>
</div>

      </form>
    </div>
  );
}
