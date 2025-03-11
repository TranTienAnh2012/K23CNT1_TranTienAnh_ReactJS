import React from 'react'

function TtaContenUseCallBack({onIncrease}) {
    console.log('render');
    
  return (
   <>
        <div>
            <h2 className='text-center'> Chào cả nhà</h2>
        </div>
        <button className='btn btn-primary px-20 ' onClick={onIncrease}>click here</button>
   </>
   
  )
}

export default TtaContenUseCallBack