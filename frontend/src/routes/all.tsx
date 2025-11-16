import Note from "../components/note"
import { getAllNotes } from "../apiTalk/apiTalk"
import { useState , useEffect} from "react"


export default function AllNotes() {
    interface NoteInt {
        _id: string;
        note: string;
    }
const [noteData, setNoteData] = useState<NoteInt[] | null>(null);
async function getAndUpdateNotes(){

const res = await getAllNotes(localStorage.getItem("token")!);
console.log(JSON.stringify(res!.notes));
setNoteData(res!.notes);


}

useEffect(() => {
    getAndUpdateNotes();
}, []);
// useeffect + a button to refresjh


    return (
        <div className="h-screen w-full bg-[#313647] text-[#FFF8D4]">
            <h1>all notes</h1> <button onClick={getAndUpdateNotes}>refresh</button>

           {noteData ? (
      noteData.map((note, index) => (
       <Note text={note.note} key={index} />
      ))
    ) : (
      <p>Loading...</p>
    )}
           
        
        
        </div>
    )
}