import React, { useState } from 'react'
import shoe from "../assets/download.jpg"

const Count = () => {
    const [count,setCount]=useState(0)
    let increment = ()=>{
        setCount(count+1)
    }
    let decrement = ()=>{
        setCount(count-1)
    }
  return (
  <div className='flex flex-col items-center justify-center m-auto max-w-[370px] bg-teal-400 h-[100vh]'>
    <img className='w-[350px] mix-blend-multiply ' src={shoe} alt="" />
      <div className='flex items-center gap-4'>
      <h1 className='text-9xl'>{count}</h1>
      <button 
    className="text-4xl w-12 h-12 bg-gray-300 flex items-center justify-center leading-none rounded-full"onClick={increment}>+</button>





     {count>0?<button className="text-4xl w-12 h-12 bg-gray-300 flex items-center justify-center leading-none rounded-full" onClick={decrement}>-</button> : ""}
     <div>
     </div>
    </div>
  </div>
  )
}

export default Count
