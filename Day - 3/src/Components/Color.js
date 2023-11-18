import React,{ useState }  from "react";
import '../Assets/css/Color3.css'
export const Color = () =>{
    const [data,setData] = useState(false)
    const Change =() =>{
        setData(!data)
    }
    return(
        <>
        <div className={data ?'red':'green'}>
        <h1>Change Color</h1>
        </div>
        <button className={data ?'greenbu':'redbu'} onClick={Change}>{data ? 'green' : 'red'}</button>
        </>
    )
}
export default Color