import { useState } from "react";
import "./App.css";
import { Buffer } from "buffer";

export const authentication = {
  username: "viki",
  password: "123",
};

// this is bad practice, I know

function App() {
  const initialMessage = "Output will be displayed here: ";
  const [message, setMessage] = useState(initialMessage);
  const BACKEND = "http://localhost:8080/messages";
  const LOGIN = "http://localhost:8080/login";

  const handleUnauthorized = () => {
    fetch(BACKEND + "/unauthorized")
      .then((response) => response.text())
      .then((text) => setMessage(text))
      .catch((error) => console.log("Error: " + error));
  };

  const handleAuthorized = () => {
    // authorization

    const headers = new Headers();
    const auth = Buffer.from(
      authentication.username + ":" + authentication.password
    ).toString("base64");

    headers.set("Authorization", "Basic " + auth);

    return fetch(BACKEND + "/authorized", { method: "GET", headers: headers })
      .then((response) => response.text())
      .then((text) => setMessage(text))
      .catch((error) => console.log("Error: " + error));
  };

  const handleLogin = () => {
    const headers = new Headers();
    const auth = Buffer.from(
      authentication.username + ":" + authentication.password
    ).toString("base64");

    headers.set("Authorization", "Basic " + auth);

    return fetch(LOGIN, { method: "GET", headers: headers })
      .then((response) => response.text())
      .then((text) => {
        setMessage("JWT" + text);
        localStorage.setItem("jwt", text);
      })

      .catch((error) => console.log("Error: " + error));
  };

  return (
    <>
      <h1>Spring Security</h1>
      <button onClick={handleUnauthorized} className="button" type="button">
        Unauthorized Login
      </button>
      <button onClick={handleAuthorized} className="button" type="button">
        Authorized Login
      </button>
      <button onClick={handleLogin} className="button" type="button">
        Authorized message
      </button>
      <p>{message}</p>
    </>
  );
}

export default App;
