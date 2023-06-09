import React, { useEffect, useState } from "react";
import '../styles/App.css';

const App = () => {

  let [count, setCount] = useState(0);

  const incrementHandler=()=>{
    setCount(count + 1);
  }

  return (
    <div class="ball">
      <h1 class="count">{count}</h1>
      <button onClick={incrementHandler}>Increment</button>
    </div>
  )
}


export default App;