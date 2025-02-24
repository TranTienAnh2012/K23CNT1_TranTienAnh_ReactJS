import React from 'react'

export default function Ttaclassfuncprops(props) {
    const TtaHan1buttonclick1 = () => {
        alert("Du lieu tu props: " +props.ttaRenderName);
        console.log("xin chao: ",props.ttaRenderName);

    }
    const TtaHanldeButtonclick2 = (param) => {
        //lay du lieu tu props
        alert("Du lieu tu props (button click 2): " +props.ttaRenderName);
        //lay du lieu tu tham so
        console.log('==============================');
        console.log("Hi:",param);
        console.log('==============================');
    }
  return (

    <div className='alert alert-info'>
        <button className='btn btn-primary mx-1' 
        onClick={TtaHan1buttonclick1}>button 1</button>

        <button className='btn btn-primary mx-1' 
        onClick={()=>TtaHanldeButtonclick2("button2")}>button 2</button>

        
    </div>
  )
}
