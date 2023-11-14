import { useState } from "react";
import "./App.css";

function App() {
  const initialMessage = "Output will be displayed here: ";
  const [message, setMessage] = useState(initialMessage);
  const BACKEND = "http://localhost:8080/messages";

  const handleUnauthorized = () => {
    fetch(BACKEND)
      .then((response) => response.text())
      .then((text) => setMessage(text))
      .catch((error) => console.log("Error: " + error));
  };

  return (
    <>
      <h1>Spring Security</h1>
      <button onClick={handleUnauthorized()} className="button" type="button">
        Unauthorized Login
      </button>
      <button className="button" type="button">
        Authorized Login
      </button>
      <button className="button" type="button">
        Authorized message
      </button>
      <p>{message}</p>
    </>
  );
}

export default App;
