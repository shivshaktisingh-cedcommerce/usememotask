import React, { useEffect, useMemo, useRef, useState } from 'react'

export const Component1 = () => {
    const ref = useRef()
    const[operands , setOperands]=useState({
        a:'' , b:'' , result:''
    })
    const[bg , setBg]=useState(false)
    const btn_color = {
        backgroundColor:bg?"black":"white" ,
        color:bg?"white":"black"
    }
    const add_function=()=>{
       setOperands({...operands, result:Number(operands.a) + Number(operands.b)})
    }
    const multiply_function = useMemo(()=>{
        console.log("multiplication")
        return ref.current = Number(operands.a) * Number(operands.b)
    },[operands])

  return (
    <div>
        <p><input type="number" onChange={(e)=>setOperands({...operands,a:e.target.value})} value={operands.a}/></p>
        <p><input type="number" onChange={(e)=>setOperands({...operands,b:e.target.value})} value={operands.b}/></p>
        <p><button onClick={add_function} style={btn_color}>Add</button></p>
        <p>{operands.result?"Sum " + operands.result:""}</p>
        <p>{operands.result?"Multiplication " +multiply_function:""}</p>
        <p><button onClick={()=>setBg(!bg)}>Toggle</button></p>
    </div>
  )
}
