import { useState, useEffect } from "react";
import axios from "axios";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const [token, setToken] =useState<string>('');

  const [EI, setEI] =useState<string>('');

  const [data, setData] =useState<string>('');

  const fetchToken = async () => {
    try {

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

      const response = await axios.request(reqOptions); // Replace with your API endpoint
      console.log(response)
      setToken(response.data.access_token);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchEI = async () => {
    try {
      let headersList = {
        Accept: "*/*",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      };
    
      let reqOptions = {
        url: "https://motionless-red-donkey.cyclic.app/educational-institution",
        method: "GET",
        headers: headersList,
      };

      const response = await axios.request(reqOptions); // Replace with your API endpoint
      console.log(response)
      const data = await JSON.stringify(response.data)
      setEI(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  const postData = async () => {
    try {
      let headersList = {
        Accept: "*/*",
        "Content-Type": "application/json",
        "Authorization": token
      };
    

      let bodyContent = JSON.stringify({
        "activity": "Horta",
        "qtyStudent": 4,
        "qtyEducator": 1,
        "infoStudent":
          "Estudantes divididos em uma equipe, equipe é responsável por um tipo de hortaliça tipo de hortaliça",
        "materials":
          "Composteiras de três compartimentos : 2 ; Composteiras (garrafa pet), qty: 3",
        "inepCod": "26127792"
      });


      let reqOptions = {
        url: "https://motionless-red-donkey.cyclic.app/internal-use",
        method: "POST",
        headers: headersList,
        data: bodyContent
      };

      const response = await axios.request(reqOptions); // Replace with your API endpoint
      console.log(response)
      const data = await JSON.stringify(response.data)
      setData(data);
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
      <button onClick={fetchToken}>Fetch Token</button>
        <div>{token}</div>
      </div>
      <div>
      <button onClick={fetchEI}>Fetch Data</button>
        <div>{EI}</div>
      </div>
      <div>
      <button onClick={fetchEI}>Fetch Data</button>
        <div>{data}</div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
