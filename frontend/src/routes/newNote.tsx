import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import TextEditor from "../components/TextEditor";
import { createNote } from "../apiTalk/apiTalk";

export default function NewNote() {
  const navigate = useNavigate();

  const [text, setText] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (!text || text.trim() === "") {
      setStatus("");
      return;
    }

    setStatus("saving...");

    const timeout = setTimeout(() => {
      // console.log("Hitting API with:", text);
      createNote(text, localStorage.getItem("token")!)
        .then((res) => {
          setStatus("saved");
          navigate("/editNote/" + res!.noteId, { state: { content: text } });
        })
        .catch((err) => console.log(err));
    }, 1000);

    return () => clearTimeout(timeout);
  }, [text]);

  return (
    <div className="h-screen">
      <TextEditor onChange={(e) => setText(e.target.value)} status={status} />
    </div>
  );
}

