import '../Assets/css/style.css';
import { Instagram } from 'lucide-react';
export const Form = () => {
    const Fun = () => {
        alert("Login Successfully")
    }
    return (
        <div className="back">
        <h1 className="col"><b>
            Login </b><Instagram size={35}/>
        </h1>
        <form onSubmit={Fun}>
            <input type="textfield" className="inputcol" placeholder='Name'></input><br/>
            <br/>
            <input type="textfield" className="inputcol" placeholder='email id'></input><br/>
            <br/>
            <input type="tel" maxlength="10" className="inputcol" placeholder='Phone Number'></input><br/>
            <br/>
            <input type="textfield" className="inputcol" placeholder='User Name'></input><br/>
            <br/>
            <input type="password" className="inputcol" placeholder='Password'></input><br/>
            <br/>
            <input type="Submit" value="Login" className="button"/>
        </form>
        </div >
    )
}
