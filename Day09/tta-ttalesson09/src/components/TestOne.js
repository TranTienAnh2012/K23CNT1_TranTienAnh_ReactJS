import React, {useState, useEffect} from 'react'

const TestOne = () => {
    const [count, setCount] = useState(0);
    useEffect (() =>{
        console.log('ban da bam vao ${count} lan');
    }, [count]);
  return (
    <div>
        <p>Ban da bam {count} lan</p>
        <button className='btn btn-primary mx-2' onClick={()=> setCount(count +1)}> Bấm tôi  </button>
    </div>
  )
}

export default TestOne