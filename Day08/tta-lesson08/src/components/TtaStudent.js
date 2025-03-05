import React, { Component } from 'react';

class TtaStudent extends Component {
    constructor(props){
        super(props);
    }
    //Ham xu ly chuc nang them
    TtaHandleView = (ttaStudent) =>{
        //Chuyen len TtaStudentList
        this.props.onTtaHandleView(ttaStudent)
    }
    render() {
        //Lấy đối tượng dữ liệu chuyển từ TtaStudentList
        let {renderTtaStudent,key} = this.props;
        console.log("Students: ",renderTtaStudent);
        
        return (
            <>
            <tr>
            <td>{key}</td>
            <td>{renderTtaStudent.ttaId}</td>
            <td>{renderTtaStudent.ttaStudentName}</td>
            <td>{renderTtaStudent.ttaAge}</td>
            <td>{renderTtaStudent.ttaGender}</td>
            <td>
              <div className="template-demo">
                <button
                  type="button"
                  className="btn btn-danger btn-icon-text" 
                  onClick={()=>this.TtaHandleView(renderTtaStudent)}
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
          </>
        );
    }
}

export default TtaStudent;