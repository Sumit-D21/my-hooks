import React, {useState} from 'react'

function HookCounterThree() {
    const [name,setName] = useState({firstname: '',lastname: ''}) 
  return (
    <div>
        <input type ='text' value = {name.firstname} onChange={(e) => setName({...name,firstname : e.target.value})}></input>
        <input type ='text' value = {name.lastname} onChange={(e) => setName({...name,lastname : e.target.value})}></input>
        <h2>Your Firstname : {name.firstname}</h2>
        <h2>Your Lastname : {name.lastname}</h2>
        {JSON.stringify(name)}
    </div>
  )
}

export default HookCounterThree