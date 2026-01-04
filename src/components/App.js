
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name,setName] = useState("")
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Enter your name:</h1>
        <input onChange={(e) => setName(e.target.value)} value={name} type="text" />
        { name ? <h1>"Hello,{name}!"</h1> : ""}
    </div>
  )
}

export default App
