// export  function Form(props:{heading:string,inputOne:string,inputTwo:string,BtnName:string}) {

//     const inputDesign = "border rounded-2xl p-2 m-2";
//     return (<> 
//     <div>
//         <h1 className="align-center text-center p-3">{props.heading}</h1>
//         <div className="flex flex-col m-2 p-1">
//         <input className={inputDesign} type="text" placeholder={props.inputOne}/>
//         <input className={inputDesign} type="password" placeholder={props.inputTwo} />
//         <button className="bg-[#c9cba3] border-0 rounded-2xl p-2 m-2 w-23 text-[#313647]">{props.BtnName}</button>
//         </div>
        


//     </div>
//     </>)


// }


// export function RegisterForm(props:{heading:string,inputOne:string,inputTwo:string,BtnName:string}) {

    
//     const inputDesign = "border rounded-2xl p-2 m-2";
//     return (<> 
//     <div>
//         <h1 className="align-center text-center p-3">{props.heading}</h1>
//         <div className="flex flex-col m-2 p-1">
//         <input className={inputDesign} type="text" placeholder={props.inputOne}/>
//         <input className={inputDesign} type="password" placeholder={props.inputTwo} />
//         <button className="bg-[#c9cba3] border-0 rounded-2xl p-2 m-2 w-23 text-[#313647]">{props.BtnName}</button>
//         </div>
        


//     </div>
//     </>)


// }




export default function Input(props:{placeholder:string, type:string , ref: any}){
    return (<>
               <input className="border rounded-2xl p-2 m-2" type={props.type} placeholder={props.placeholder} ref={props.ref}/>
    </>)
    
}