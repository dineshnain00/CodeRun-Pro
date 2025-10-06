import React from "react";

export default function Terminal({ output }) {
  return (
    <div className="mt-4 bg-black text-green-400 p-3 rounded">
      <pre>{output || "Output will appear here..."}</pre>
    </div>
  );
}
