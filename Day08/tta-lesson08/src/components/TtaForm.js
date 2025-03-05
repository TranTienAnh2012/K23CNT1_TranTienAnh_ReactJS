import React, { Component } from 'react';

class TtaForm extends Component {
    render() {
        const { RenderTtaStudent } = this.props;

        // Kiểm tra nếu chưa chọn sinh viên, dùng dữ liệu mặc định
        const studentData = RenderTtaStudent || {
            ttaId: "",
            ttaStudentName: "",
            ttaAge: "",
            ttaGender: "",
            ttaBirtday: "",
            ttaBirtPlace: "",
            ttaAddress: "",
        };

        return (
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">Thông tin sinh viên</h3>
                    <form className="form-sample">
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Mã sinh viên</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" value={studentData.ttaId} readOnly />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Tên sinh viên</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" value={studentData.ttaStudentName} readOnly />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Tuổi</label>
                            <div className="col-sm-9">
                                <input type="text" className="form-control" value={studentData.ttaAge} readOnly />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Giới tính</label>
                            <div className="col-sm-9">
                                <select className="form-control" value={studentData.ttaGender} disabled>
                                    <option>Nam</option>
                                    <option>Nữ</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Ngày sinh</label>
                            <div className="col-sm-9">
                                <input className="form-control" placeholder="dd/mm/yyyy" value={studentData.ttaBirtday} readOnly />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Nơi sinh</label>
                            <div className="col-sm-9">
                                <select className="form-control" value={studentData.ttaBirtPlace} disabled>
                                    <option value="NinhBinh">Ninh Bình</option>
                                    <option value="HaNoi">Hà Nội</option>
                                    <option value="ThaiBinh">Thái Bình</option>
                                    <option value="TPHoChiMinh">TP. Hồ Chí Minh</option>
                                    <option value="BacNinh">Bắc Ninh</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Địa chỉ</label>
                            <div className="col-sm-9">
                                <textarea className="form-control" value={studentData.ttaAddress} readOnly />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary me-2" disabled>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default TtaForm;
