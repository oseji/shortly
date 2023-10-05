import { useState } from "react";
import Navbar from "./Navbar";
import Home from "./home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="appContainer">
        <Navbar></Navbar>
        <Home></Home>
      </div>
    </>
  );
}

export default App;
