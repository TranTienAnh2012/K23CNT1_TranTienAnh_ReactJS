import React, { useEffect, useState } from 'react'

export default function TtauseEffect() {
    const [count , setCount] = useState(0);
    useEffect(()=>{
        console.log ("useEffect(call back)");
    })
    useEffect(() =>{
      console.log("useEffect(callback),[]; chi mot lan duy nhat ");
    },[])
    useEffect(()=>{
      console.log("count has changer",count);
    })
  return (
    <div className='alert alert-danger'>
      <h2>useEffect</h2> 
      <button className='btn btn-primary mx-2' onClick={() =>setCount(count+1)}>Click</button>  
    </div>
  )
}
