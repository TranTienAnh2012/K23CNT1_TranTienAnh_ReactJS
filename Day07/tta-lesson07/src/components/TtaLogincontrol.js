import React from 'react'
import TtaLogoutcomp from './TtaLogoutcomp'
import TtaLoginComp from './TtaLoginComp'

export default function TtaLogincontrol(props) {
    const TtaElement = props.isLoggedin ? <TtaLoginComp /> : <TtaLogoutcomp/>

    // const TtaLogin =() => {
    //     if(props.isLoggedin)
    //         return <TtaLogoutcomp />
    //     else 
    //         return <TtaLogincontrol/>
    // }
  return (
    <div>
        {TtaElement}
    </div>
  )
}
