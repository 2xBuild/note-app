import { Link } from "react-router-dom"
import Input from "../components/input"
import Btn from "../components/btn"
import { useNavigate , Navigate  } from "react-router-dom";
import { useEffect, useRef } from "react";
import { sendLogin } from "../apiTalk/apiTalk";
// once u login turn the btn name into me.

export default function Login(){

 const navigate = useNavigate();
   const token = localStorage.getItem("token");

  if (token) {
    return <Navigate to="/me" replace />;
  }

// useEffect(() => {
//     const token = localStorage.getItem("token");
//     if(token){
//         navigate("/me");
//     }
// }, []);



async function submitDetail(){
 const email = Email.current.value;
 const password = Password.current.value;

 const data = {email,password};


const res = await sendLogin(data);
if(res!.status == "401"){
    alert("something went wrong");
}

const token = res!.token;
localStorage.setItem("token", token);

// redirects to /me
 navigate("/me");

}


const Email:any = useRef('');
const Password:any = useRef('');










    return (<>
<div className="h-screen">
    <div>
      <h1 className="align-center text-center p-3">Login</h1>

      <div className="flex flex-col m-2 p-1">
        <Input placeholder="Email" type="text" ref={Email}/>
        <Input placeholder="Password" type="password" ref={Password} />
        <Btn BtnName="Login" onClick={submitDetail}/>
  
    
       </div>

    </div>
       


        <p>New to Notes? <Link to="/register" className="text-[#c9cba3]">Sign Up</Link></p>
   </div> </>)
}