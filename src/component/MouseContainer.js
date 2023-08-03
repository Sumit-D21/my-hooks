import React, {useState} from 'react'
import UseMouse from './UseMouse'

function MouseContainer() {
    const  [display,setDisplay] = useState(true)
  return (
    <div>
        <button onClick={()=> setDisplay(!display)}>Toggle Mouse</button>
        {display && <UseMouse/>}
    </div>
  )
}

export default MouseContainer