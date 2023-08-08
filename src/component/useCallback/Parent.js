import React, { useCallback, useState } from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'

function Parent() {
    const [age,setAge] = useState(25)
    const [salary,setSalary] = useState(10000)

    const IncrementAge = useCallback(() =>{
        setAge(age + 1)
    },[age])

    const IncrementSalary = useCallback(() =>{
        setSalary(salary + 10000)
    },[salary])
  return (
    <div>
        <Title></Title>
        <Count text='age' count={age}></Count>
        <Button handleclick={IncrementAge}>Increment Age</Button>
        <Count text='Salary' count={salary}></Count>
        <Button handleclick={IncrementSalary}>Increment salary</Button>
    </div>
  )
}

export default Parent