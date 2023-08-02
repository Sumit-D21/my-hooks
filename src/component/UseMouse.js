import React, { useState ,useEffect } from 'react'

function UseMouse() {
    const[x, setX] = useState(0)
    const[y, setY] = useState(0)

    const logmouseposition = e =>{
        console.log('Mouse position')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log('use effect called')
        window.addEventListener('mousemove',logmouseposition)
    },[])

  return (
    <div>
        Pointer X-{x} , Y-{y}
    </div>
  )
}

export default UseMouse