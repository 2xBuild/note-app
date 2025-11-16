import { useParams , useLocation  } from "react-router-dom";
import { useEffect, useState } from "react";
import TextEditor from "../components/TextEditor"
import { getNote, editNote } from "../apiTalk/apiTalk";

export default function EditNote() {
  const { id } = useParams();
  


  
 const [text, setText] = useState("");
 const [status, setStatus] = useState("");

 // fetch the old note or get the value from last page and then edit 

 useEffect(() => {
   
    setStatus("saving...");


    const timeout = setTimeout(() => {
      editNote(localStorage.getItem("token")!, id!, text).then((res)=>{
          setStatus("saved for "+id);
      }).catch((err)=>{
        console.log(err);
      })
      
    

      
    }, 1000); 

    return () => clearTimeout(timeout);
  }, [text]);
 
 useEffect(()=>{
   // ask backend for current todo.
   getNote(localStorage.getItem("token")!, id!).then((data)=>{
    console.log(data);
     setText(data!);
   })
 },[])



  return    (  <div className="h-screen">

         
     <div className="w-[100%] h-[80%]  mx-auto  bg-dark mt-2 ">
        <textarea className="resize-none w-full h-full focus:outline-none color-white-500 " value={text} onChange={(e)=>setText(e.target.value)} placeholder="Start writing here."></textarea>
        <div className="text-center text-[#fff8d439]" >{status}</div>
 
    </div>
      
            

        </div>);
}

