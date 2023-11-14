import "./App.css";

function App() {
  return (
    <>
      <h1>Spring Security</h1>
      <button className="button" type="button">
        Unauthorized Login
      </button>
      <button className="button" type="button">
        Authorized Login
      </button>
      <button className="button" type="button">
        Authorized message
      </button>
      <p>Output will be displayed here: </p>
    </>
  );
}

export default App;
