import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function TtaEditUsers() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [Ttauser, setTtaUser] = useState({
        TtaFullName: '',
        TtaEmail: '',
        TtaPhone: '',
        TtaAcTive: false
    });

    useEffect(() => {
        axios.get(`https://67d8d4bb00348dd3e2a85d0a.mockapi.io/tta-k23cnt1_2310900005/Tta_students/${id}`)
            .then((response) => setTtaUser(response.data))
            .catch((error) => console.log("Lỗi:", error));
    }, [id]);

    const TtahandleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setTtaUser((prevUser) => ({
            ...prevUser,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const TtahandleSubmit = (e) => {
        e.preventDefault();
        axios.put(`https://67d8d4bb00348dd3e2a85d0a.mockapi.io/tta-k23cnt1_2310900005/Tta_students/${id}`, Ttauser)
            .then(() => {
                alert("Cập nhật thành công!");
                navigate('/DSUsers'); // Quay lại danh sách
            })
            .catch((error) => console.log("Lỗi:", error));
    };

    return (
        <div className="tta-edit-users">
            <h2>Chỉnh sửa User ID: {id}</h2>
            <form onSubmit={TtahandleSubmit}>
                <div className="form-group">
                    <label>Full Name:</label>
                    <input
                        type="text"
                        name="TtaFullName"
                        value={Ttauser.TtaFullName}
                        onChange={TtahandleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="TtaEmail"
                        value={Ttauser.TtaEmail}
                        onChange={TtahandleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Phone:</label>
                    <input
                        type="text"
                        name="TtaPhone"
                        value={Ttauser.TtaPhone}
                        onChange={TtahandleChange}
                        required
                    />
                </div>
                <div className="form-group checkbox-group">
                    <label>Active:</label>
                    <input
                        type="checkbox"
                        name="TtaAcTive"
                        checked={Ttauser.TtaAcTive}
                        onChange={TtahandleChange}
                    />
                </div>
                <div className="button-group">
                    <button className="btn btn-primary" type="submit">Cập nhật</button>
                </div>
            </form>
        </div>
    );
}
