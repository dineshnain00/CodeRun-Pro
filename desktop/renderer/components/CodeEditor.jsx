import React, { useState } from "react";

export default function CodeEditor({ onRun }) {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("js");

  return (
    <div>
      <select onChange={(e) => setLanguage(e.target.value)} value={language}>
        <option value="js">JavaScript</option>
        <option value="py">Python</option>
        <option value="cpp">C++</option>
      </select>

      <textarea
        rows={10}
        cols={80}
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Write your code here..."
      />

      <button onClick={() => onRun(code, language)}>Run</button>
    </div>
  );
}
