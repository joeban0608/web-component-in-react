import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./webComponents/XSearch";
function App() {
  const [count, setCount] = useState(0);
  const mockData = [
    { name: "joe", description: "about joe" },
    { name: "mac", description: "about mac" },
  ];
  return (
    <>
      <div>
        <h1>Here is web component x-search</h1>
        <x-search
          size="2"
          imgSrc="logo.png"
          data-arr={JSON.stringify(mockData)}
        ></x-search>
        <hr></hr>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}

export default App;
