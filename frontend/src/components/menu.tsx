import { Link } from "react-router-dom"
import MenuButton from "./menuButton"

export default function Menu() {
const token = localStorage.getItem("token");
    // return all the menu buttons 
    return (<>

        <div className="flex flex-row justify-end">
            <Link to="/all" > <MenuButton label="All Notes" onClick={() => { }} /></Link>
            <Link to="/new" >   <MenuButton label="New" onClick={() => { }} /></Link>
            { token ? <Link to="/me" >  <MenuButton label="Me" onClick={() => { }} /></Link> : <Link to="/login" >  <MenuButton label="Login" onClick={() => { }} /></Link>  } 
        </div>

    </>
    )

}