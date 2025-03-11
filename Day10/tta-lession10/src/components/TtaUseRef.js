import React, { useRef, useState } from 'react'

export default function TtaUseRef() {
    const [count, setCount] = useState(60);
    const timerID = useRef();
    const TtaHandleStart = () =>{
        timerID.current = setInterval(() =>{
              setCount(prevCount => prevCount-1)
            }, 1000)
    }
    const TtaHandleStop = () =>{
        clearInterval(timerID.current);
        console.log('Stop ->',timerID.current);
        
    }
  return (
    <div>
        <h1 className='text-center'>{count}</h1>
        <button className='btn btn-primary mx-2' onClick={TtaHandleStart}>Start</button>
        <button className='btn btn-danger mx-2' onClick={TtaHandleStop}>Stop</button>
    </div>
  )
}
