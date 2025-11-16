import { useState, useEffect } from "react";

export default function SearchInput() {
  const [text, setText] = useState("");
  
  useEffect(() => {
    if (!text) return;

    const timeout = setTimeout(() => {
      // API hit after user stops typing
      console.log("Hitting API with:", text);

      fetch("/api/search?q=" + text);
    }, 500); // <-- debounce delay

    return () => clearTimeout(timeout);
  }, [text]);

  return (
    <input
      className="border p-2"
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Type something..."
    />
  );
}
