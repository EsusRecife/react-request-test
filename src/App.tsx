import { useState, useEffect } from "react";
import axios from "axios";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const [auth, setToken] =useState<string>('');

  let headersList = {
    Accept: "*/*",
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    inepCod: "26127792",
    password: "26127792",
  });

  let reqOptions = {
    url: "https://motionless-red-donkey.cyclic.app/auth/login",
    method: "POST",
    headers: headersList,
    data: bodyContent,
  };

  const fetchToken = async () => {
    try {
      const response = await axios.request(reqOptions); // Replace with your API endpoint
      console.log(response)
      setToken(response.data.access_token);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };



  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div>
      <button onClick={fetchToken}>Fetch Data</button>
        <div>{auth}</div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
