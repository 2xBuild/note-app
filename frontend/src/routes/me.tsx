
import { useNavigate } from "react-router-dom";
import {getMe} from "../apiTalk/apiTalk";

import {  useEffect , useState} from "react";


interface dtlFormat {
    result: {
        user: {
            name: string;
            email: string;
        };
        notes: string[];
    };
}


export default  function AboutMe(){
    const [detail, setDetail] = useState< dtlFormat| null>(null);

const navigate = useNavigate();
if(!localStorage.getItem("token")){
    navigate("/login");
}
useEffect(() => {
    
    async function getDetail(){
   const token = localStorage.getItem("token");
   const res : any = await getMe(token!);
   setDetail(res!);

 }

 
getDetail();
}, []);



    return(
        <div>about me
            <div>
                {detail ?<p>Name : {detail.result.user.name} Email : {detail.result.user.email} , Notes : {detail.result.notes.length}</p> : <p>loading</p>}
            </div>
            <div>  <button onClick={() =>{  localStorage.removeItem("token"); navigate("/login");}}>Logout</button></div>
        </div>
    )
}

// if token is set in localstorage , then hit api and open this page. if not or api fails, redirect to login page.

// login page and register should not work if token is set.
// add a logout button too. 