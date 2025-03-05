import React, { Component } from 'react';
import TtaStudent from './TtaStudent';

class TtaStudentList extends Component {
    constructor(props){
        super(props);
     
    }
    //Ham xu ly su kien xem 
    TtaHandleView = (ttaStudent)=>{
      //chuyen du lieu len ttaapp
      this.props.onTtaHandleView(ttaStudent);

    }
    render() {
        //Lay du lieu trong props appjs chuyen xuong components
        let {renderTtaStudents}= this.props;
        console.log("List:",renderTtaStudents);
        // chuyển dữ liêu từ TtaStudent de hien thi
        // let TtaElemenStudent = renderTtaStudents.map((ttaItem,Index)=>{
        //     return <TtaStudent key={Index} renderTtaStudent ={ttaItem} onTtaHandleView={this.TtaHandleView} />
        // })
          
          let TtaElemenStudent = renderTtaStudents.map((ttaItem, index) => {
            return (
                <TtaStudent 
                    key={index} 
                    index={index + 1} 
                    renderTtaStudent={ttaItem} 
                    onTtaHandleView={this.TtaHandleView} 
                />
            );
        });

        return (
            <div>
                  <div className="card-body">
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
                            {/* <TtaStudent />
                            <TtaStudent />
                            <TtaStudent />
                            <TtaStudent />
                            <TtaStudent /> */}
                            {TtaElemenStudent}
                   
                      </tbody>
                    </table>
                  </div>
                </div>
            </div>
        );
    }
}

export default TtaStudentList;