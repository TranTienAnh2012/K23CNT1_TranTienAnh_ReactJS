import React from 'react';

export default function TtafuncEven() {
    // Hàm xử lý sự kiện
    const tvcEvenbuttonc11lick = () => {
        alert("button 1 - clicked");
    };
    const tvcEvenbuttonc22lick = () => {
        alert("button 2 - clicked");
    };
    const tvcEvenbuttonc3lick = (name) => {
        alert("name" + name);
    };

    return (
        <div className='alert alert-success ' >
            <button className='btn btn-primary mx-1' onClick={tvcEvenbuttonc11lick}> button 1 </button>
            <button className='btn btn-danger mx-1' onClick={tvcEvenbuttonc22lick}> button 2 </button>
            <button className='btn btn-dark mx-1' onClick={()=>tvcEvenbuttonc3lick("TranTienAnh")} > button 3 </button>
        </div>
    );
}
