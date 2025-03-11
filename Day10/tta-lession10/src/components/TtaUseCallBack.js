//useCallback dùng để tối ưu hóa cho qua trình render
import React, { useCallback, useState } from 'react'
import TtaContenUseCallBack from './TtaContenUseCallBack';

function TtaUseCallBack() {
    const [count, setCount] = useState(0);
        const TtaHadelIncrease = useCallback(() => {
            setCount(prevCount => prevCount + 1)
        }, [])
  return (
    <div>
        <TtaContenUseCallBack
             onIncrease={TtaHadelIncrease}>       
        </TtaContenUseCallBack>
        <h1 className='text-center'>
            {count}
        </h1>
    </div>
  )
}

export default TtaUseCallBack
