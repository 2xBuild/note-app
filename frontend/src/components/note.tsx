import parse from "html-react-parser";

// use ref to mark index for each note so can rmeove and edit too
export default function Note(props :{text:string, key:any}){

    // first 50 words of note. 
    return(<> 
    <div className="p-3 m-2 border rounded-[10px]" key={props.key}>
        {parse(props.text)}
    </div>
    </>)
}