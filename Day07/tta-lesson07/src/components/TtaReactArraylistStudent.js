import React, { Component } from 'react';

class TtaReactArraylistStudent extends Component {
    constructor(props){
        super(props);
        this.state = {
            TtaStudents:[
                {TtaId:"Sv001",TtaName:"Tran Tien Anh",TtaAge:20, TtaClass:"K23CNT1"},
                {TtaId:"Sv001",TtaName:"Tran Tien b",TtaAge:20, TtaClass:"K23CNT1"},
                {TtaId:"Sv001",TtaName:"Tran Tien c",TtaAge:20, TtaClass:"K23CNT1"},
                {TtaId:"Sv001",TtaName:"Tran Tien e",TtaAge:20, TtaClass:"K23CNT1"},
            ],
        }
    }
    //render data 
    // TtaElement = this.state.TtaStudents.map((Ttaitem, index)=>{
         
    // })
    render() {
        const TtaElement = this.state.TtaStudents.map((Ttaitem, index)=>{    
        return(
            
            <tr>
                <td>{Ttaitem.TtaId}</td>
                <td>{Ttaitem.TtaName}</td>
                <td>{Ttaitem.TtaAge}</td>
                <td>{Ttaitem.TtaClass}</td>
                <button className='btn btn-primary mx-2'>Sua</button>
                <button className='btn btn-danger mx-2'>Xoa</button>
            </tr>
        )
    })
        return (
            <div className='text-center' >
                <h2>Danh sach Sinh vien</h2>
                <table class="table table-striped" >
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>TtaID</th>                            
                            <th>TtaAge</th>                            
                            <th>TtaClass</th>                            
                            <th>Chuc Nang</th>
                        </tr>
                    </thead>
                    <tbody>
                      {TtaElement}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TtaReactArraylistStudent;