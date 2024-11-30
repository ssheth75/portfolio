import React, { useState } from "react";
import axios from "axios";

function ProtectedComponent() {
  const [password, setPassword] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post("https://your-vercel-url/api/secret", {
        password,
      });
      setContent(response.data.content);
      setError("");
    } catch (err) {
      setError("Incorrect password or unauthorized access.");
      setContent("");
    }
  };

  return (
    <div>
      {content ? (
        <div>{content}</div>
      ) : (
        <div>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleSubmit}>Submit</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      )}
    </div>
  );
}

export default ProtectedComponent;
