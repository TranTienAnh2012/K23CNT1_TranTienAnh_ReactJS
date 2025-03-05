// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { Component } from 'react';
import TtaControl from './components/TtaControl';
import TtaStudentList from './components/TtaStudentList';
import TtaForm from './components/TtaForm';



class TtaApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      ttaStudent:[
        {ttaId:"SV01",ttaStudentName:"Tran Tien Anh ",ttaAge:19,ttaGender:"Nam", ttaBirtday:"20/12/2005" ,ttaBirtPlace:"NinhBinh",ttaAddress:" Toa VCN, 25 Vu Ngoc Phan"},
        {ttaId:"SV02",ttaStudentName:"Nguyen Ngoc Hien ",ttaAge:19,ttaGender:"Nam", ttaBirtday:"20/12/2005" ,ttaBirtPlace:"HaNoi",ttaAddress:" Toa VCN, 25 Vu Ngoc Phan"},
        {ttaId:"SV03",ttaStudentName:"Nguyen Cong Tung ",ttaAge:19,ttaGender:"Nam", ttaBirtday:"20/12/2005" ,ttaBirtPlace:"ThaiBinh",ttaAddress:" Toa VCN, 25 Vu Ngoc Phan"},
        {ttaId:"SV04",ttaStudentName:"Nguyen Ngoc Hieu ",ttaAge:19,ttaGender:"Nam", ttaBirtday:"20/12/2005" ,ttaBirtPlace:"TPHoChiMinh",ttaAddress:" Toa VCN, 25 Vu Ngoc Phan"},
        {ttaId:"SV05",ttaStudentName:"Nguyen Ngoc Anh ",ttaAge:19,ttaGender:"Nữ", ttaBirtday:"20/12/2005" ,ttaBirtPlace:"BacNinh",ttaAddress:" Toa VCN, 25 Vu Ngoc Phan"},
      ],
      // ttaStudent:"",
      ttaSelectedStudent: null, 
    }
  }
  //ham xu ly su kien view student
  ttaHandleView =(selectedStudent)=>{
      this.setState({
        ttaSelectedStudent:selectedStudent,
      })
  }
  render() {
   // Log đúng sinh viên được chọn
console.log("Selected Student:", this.state.ttaSelectedStudent);

    
    return (
      <div>
        <h1 className='text-center'>Trần Tiến Anh K23CNT1 Miniproject</h1>
        <hr/>
        <div className="row">

            <div className="col-lg-7 grid-margin stretch-card">
              <div className="card">
                {/* <div className="card-header">
                  <div className="row">
                    <div className="col-3 ">
                      <button type="button" className="btn btn-primary btn-icon-text">
                        Thêm mới sinh viên
                      </button>
                    </div>
                    <div className="col-6 ">
                      <form className="search-form" action="#">
                        <i className="icon-search" />
                        <input
                          type="search"
                          className="form-control"
                          placeholder="Search Here"
                          title="Search here"
                        />
                        <button className="btn btn-primary btn-icon-text">
                          Tìm kiếm
                        </button>
                      </form>
                    </div>
                    <div className="col-3 d-flex align-items-center">
                      <select className="form-control">
                        <option value="">Sắp xếp</option>
                        <option value="">ABC def</option>
                        <option value="">ABC def</option>
                        <option value="">ABC def</option>
                      </select>
                    </div>
                  </div>
                </div> */}
                {/* header */}
                <TtaControl />

                {/* <div className="card-body">
                  <h3 className="card-title">Danh sách sinh viên</h3>
                  <div className="table-responsive pt-3">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Mã sinh viên</th>
                          <th>Tên sinh viên</th>
                          <th>Tuổi</th>
                          <th>Giới tính</th>
                          <th>Hành động</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>SV001</td>
                          <td>Nguyễn Văn A</td>
                          <td>20</td>
                          <td>Nam</td>
                          <td>
                            <div className="template-demo">
                              <button
                                type="button"
                                className="btn btn-danger btn-icon-text"
                              >
                                Xem
                              </button>
                              <button
                                type="button"
                                className="btn btn-warning btn-icon-text"
                              >
                                Sửa
                              </button>
                              <button
                                type="button"
                                className="btn btn-success btn-icon-text"
                              >
                                Xóa
                              </button>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>SV002</td>
                          <td>Nguyễn Văn B</td>
                          <td>21</td>
                          <td>Nữ</td>
                          <td>
                            <div className="template-demo">
                              <button
                                type="button"
                                className="btn btn-danger btn-icon-text"
                              >
                                Xem
                              </button>
                              <button
                                type="button"
                                className="btn btn-warning btn-icon-text"
                              >
                                Sửa
                              </button>
                              <button
                                type="button"
                                className="btn btn-success btn-icon-text"
                              >
                                Xóa
                              </button>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>SV003</td>
                          <td>Nguyễn Văn C</td>
                          <td>19</td>
                          <td>Nam</td>
                          <td>
                            <div className="template-demo">
                              <button
                                type="button"
                                className="btn btn-danger btn-icon-text"
                              >
                                Xem
                              </button>
                              <button
                                type="button"
                                className="btn btn-warning btn-icon-text"
                              >
                                Sửa
                              </button>
                              <button
                                type="button"
                                className="btn btn-success btn-icon-text"
                              >
                                Xóa
                              </button>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div> */}
                {/* body */}
                <TtaStudentList renderTtaStudents = {this.state.ttaStudent} onTtaHandleView={this.ttaHandleView} />
              </div>
            </div>

            <div className="col-5 grid-margin">
                {/* form */}
                  <TtaForm RenderTtaStudent={this.state.ttaSelectedStudent}/>
            </div>
          </div>

      </div>
    );
  }
}

export default TtaApp;
