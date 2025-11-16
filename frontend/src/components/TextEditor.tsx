import React, { useRef, useState , } from "react";
import type { ChangeEvent } from "react";

interface TextEditorProps {
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  status: string,
  preText?: string 
}

const TextEditor:React.FC<TextEditorProps> = ({onChange,status}) =>{

    // const SaveData = async (e:any) => {
    //     const data = e.target.value;
    //     // saving in localstorage
    //     localStorage.setItem("data", data);
    //   };

  return (
    <div className="w-[100%] h-[80%]  mx-auto  bg-dark mt-2 ">
        <textarea className="resize-none w-full h-full focus:outline-none color-white-500 " onChange={onChange} placeholder="Start writing here."></textarea>
        <div className="text-center text-[#fff8d439]" >{status}</div>
 
    </div>
  );
};

export default TextEditor;
