import React from 'react'
import '../Assets/css/Table3.css'
const Table = (props)=>{
    return(
        <>
            <table>
                <tr>
                    <th>Fields</th>
                    <th>Details</th>
                </tr>
                <tr>
                    <td>Name</td>
                    <td>{props.name}</td>
                </tr>
                <tr>
                    <td>Roll No</td>
                    <td>{props.roll}</td>
                </tr>
                <tr>
                    <td>Phone Number</td>
                    <td>{props.pn}</td>
                </tr>
                <tr>
                    <td>Dept</td>
                    <td>{props.dept}</td>
                </tr>
            </table>
        </>
    )
}
export default Table;