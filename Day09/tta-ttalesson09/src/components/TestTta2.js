import React,{useState} from 'react'

function TestTta2() {
    //dung usestate
    const lists = ['arr1', 'arr2'];
    //Tryen 1 gia tri
    //Tạo State là const và hàm cập nhật state ;à setcount
    const [count, setCount] = useState(0);
    //Truyen 1 mang 
    const [list, setList] = useState(lists);
    function  handleList(){
        setList([
            ...list,
            parseInt(Math.random()*1000)
        ])
    }
    //ham xu ly su kien tang gia tri cua count
    const TtaHandeltang=()=>{
       setCount(count +1);

    }
    //state la mang list
    const danh_sach =[100,120,150,200];
    //khoi tao list
    const [liste, setLists] = useState(danh_sach);
    // ham su ly su kiem
    const TtaHandleAppNewRandom = () =>{
            setLists (prev =>{
                return[
                    ...prev,
                    parseInt(Math.random()*1000)
                ]
            })
    }
  return (
    <div className='alert alert-info'>
        <h2>Tim hieu them ve useState</h2>
        <div >
            <p>Your clicked {count} time</p>
            <p>List: {list.toString()}</p>
            <button className='btn btn-primary mx-2' onClick={() =>setCount(count +1)}> click me</button>
            <button className='btn btn-primary mx-2' onClick={handleList }> click me</button>
            
        </div>
        <div>
            <p>count {count}</p>
            <button className='btn btn-primary mx-2' onClick={TtaHandeltang}>Tang</button>
            <button className='btn btn-primary mx-2' onClick={()=>setCount(count-1)}>Giam</button>
            <button className='btn btn-primary mx-2' onClick={()=>setCount(0)}>Dat lai</button>
        </div>
        <div>
            <h2>list: {liste.toString()}</h2>
            <button className='btn btn-primary mx-2' onClick={TtaHandleAppNewRandom}>App new</button>
        </div>

    </div>
  )
}

export default TestTta2