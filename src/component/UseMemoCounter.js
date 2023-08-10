import React, { useMemo, useState } from 'react'

function UseMemoCounter() {
    const [countone, setCountone] = useState(0)
    const [counttwo, setCounttwo] = useState(0)

    const incrementone = () =>{
        return setCountone(countone + 1)
    }

    const incrementtwo = () =>{
        return setCounttwo(counttwo + 1)
    }

    const isEven = useMemo(() =>{
        let i = 0
        while(i<20000000) i++
        return countone % 2 === 0 
    },[countone])
    
  return (
    <div>
        <div>
            <button onClick={incrementone}>Increment - {countone}</button>
            <span>
            {isEven ? 'even' : 'odd'}
            </span>
        </div>
        <div>
            <button onClick={incrementtwo}>Increment - {counttwo}</button>
        </div>
    </div>
  )
}

export default UseMemoCounter