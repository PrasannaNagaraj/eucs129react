import React from 'react'
import { useState } from 'react'
const Addsub = () => {
    const [data,setData]=useState(0)
    const Reduce =() => {
        setData(data -1)
    }
    const Add =() =>{
        setData(data +1)
    }
    return(
        <>
        <button onClick={Reduce}> - </button>
        <button>{data}</button>
        <button onClick={Add}> + </button>
        </>
    )
}
export default Addsub