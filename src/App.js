import React,{useState} from "react";
import './App.css';
import Navbar from "./Components/Navbar";

function App() {
  const [count, setCount] = useState(0)
  return (
  <>
  <div className="App">
  <Navbar/>
  </div>
  <h1>My count is {count}</h1>
  <button onClick={()=>setCount(count+1)}>Likes</button>
  </>

  );
}

export default App;
