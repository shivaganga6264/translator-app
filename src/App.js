import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [output, setOutput] = useState("");
  const [language, setLanguage] = useState("Telugu");

  const translate = () => {
    if (!text.trim()) {
      alert("Please enter text!");
      return;
    }

    setOutput(`(${language}) Translation: ${text.split("").reverse().join("")}`);
  };

  return (
    <div style={{ padding: 40, textAlign: "center" }}>
      <h1>🌐 Translator App (Demo Version)</h1>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text..."
        rows="5"
        style={{ width: "80%", padding: 10 }}
      ></textarea>

      <br /><br />

      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        style={{ padding: 10, width: "200px" }}
      >
        <option>Hindi</option>
        <option>Telugu</option>
        <option>Tamil</option>
        <option>Kannada</option>
        <option>Malayalam</option>
      </select>

      <br /><br />

      <button
        onClick={translate}
        style={{
          padding: "10px 25px",
          background: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "8px"
        }}
      >
        Translate
      </button>

      <br /><br />

      {output && (
        <div
          style={{
            marginTop: 20,
            border: "1px solid #ccc",
            padding: 20,
            borderRadius: 8,
            width: "80%",
            margin: "auto",
            background: "#f9f9f9"
          }}
        >
          <h3>Translated Output</h3>
          <p>{output}</p>
        </div>
      )}
    </div>
  );
}

export default App;

