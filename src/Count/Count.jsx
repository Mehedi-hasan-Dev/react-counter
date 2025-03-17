import React, { useState } from 'react'
import shoe from "../../public/download.jpg"

const Count = () => {
    const [count,setCount]=useState(0)
    let increment = ()=>{
        setCount(count+1)
    }
    let decrement = ()=>{
        setCount(count-1)
    }
  return (
  <div className='flex flex-col items-center justify-center'>
    <img className='w-[350px]' src={shoe} alt="" />
      <div className=''>
      <h1 className='text-9xl'>{count}</h1>
     <div>
     <button className='text-9xl' onClick={increment}>+</button>
     {count>0?<button className='text-9xl' onClick={decrement}>-</button> : ""}
     </div>
    </div>
  </div>
  )
}

export default Count
