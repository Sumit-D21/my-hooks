import React, {useState} from 'react'

function HookCountersTwo() {
const initialValue = 0
const [count,setCount] = useState(initialValue)
const onClickHandeler = () =>{
    for(let i=0; i<5;i++){
        setCount((p)=>p-1)
    }
}
  return (
    <div>
        count {count}
        <button onClick={() => setCount(initialValue)}>Reset</button>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(count + 5)}>Increment 5</button>
        <button onClick={onClickHandeler}>Decrement 5</button>
    </div>
  )
}

export default HookCountersTwo