import React ,{useState, useEffect} from 'react'

function HookCounterEffect() {
    const [count,setCount] = useState(0)
    const [name,setName] = useState('')

    useEffect(() => {
        console.log('useEffect-changes value')
        document.title = `You have clicked ${count} timed`
    },[count])
  return (
    <div>
        <input type = 'text' value = {name} onChange={e => setName(e.target.value)} />
        <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </div>
  )
}

export default HookCounterEffect