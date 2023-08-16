import React, { useEffect, useRef } from 'react'

function UseRefInput() {

    const inputRef = useRef(null)

    useEffect(() =>{
        inputRef.current.focus()
    })
  return (
    <div>
        <input ref={inputRef} type='input'></input>
    </div>
  )
}

export default UseRefInput