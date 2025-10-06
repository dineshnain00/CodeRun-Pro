import React, { useState } from "react";
import CodeEditor from "./components/CodeEditor";
import Terminal from "./components/Terminal";
import axios from "axios";

export default function App() {
  const [output, setOutput] = useState("");

  const handleRun = async (code, lang) => {
    const res = await axios.post("http://localhost:5000/run", { code, language: lang });
    setOutput(res.data.output || res.data.error);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">CodeRun Pro</h1>
      <CodeEditor onRun={handleRun} />
      <Terminal output={output} />
    </div>
  );
}// Desktop app main UI
