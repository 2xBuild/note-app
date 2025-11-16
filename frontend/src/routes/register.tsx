import { Link } from "react-router-dom"
import Input from "../components/input"
import Btn from "../components/btn"
import { useRef , useEffect} from "react"
import { sendPost } from "../apiTalk/apiTalk"

import { useNavigate , Navigate } from "react-router-dom";


export default function Register(){

const navigate = useNavigate();

  const token = localStorage.getItem("token");

  if (token) {
    return <Navigate to="/me" replace />;
  }


async function submitDetail(){
 const name = FullName.current.value;
 const email = Email.current.value;
 const password = Password.current.value;

 const data = {name,email,password};
const res = await sendPost(data);
// if(res!.status !== "200"){
//     alert("something went wrong");
// }

const token = res!.token;
localStorage.setItem("token", token);

// redirects to /me
 navigate("/me");

}

const FullName :any = useRef('');
const Email:any = useRef('');
const Password:any = useRef('');




  
    return (<>
<div className="h-screen">
    <div>
      <h1 className="align-center text-center p-3">Login</h1>

      <div className="flex flex-col m-2 p-1">
        <Input placeholder="Name" type="text" ref={FullName}/>
        <Input placeholder="Email" type="text" ref={Email} />
        <Input placeholder="Password" type="password"  ref={Password}/>
        <Btn BtnName="Register" onClick={submitDetail}/>
  
    
       </div>

    </div>
       


        <p>Already a user? <Link to="/login" className="text-[#c9cba3]">Login</Link></p>
   </div> </>)
}