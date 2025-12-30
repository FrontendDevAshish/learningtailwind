
import './App.css';
import { useState } from 'react';
function App() {
  const [count, setCount] = useState(false);

  return (
    <div className={count ? "App":"Appa"} >
      <header className={count ? "App-header":"Appa-header"}>
      {count?<h1>Dark is mode is off</h1>:<h1>Dark is mode on!</h1>} 
       <button onClick={() => setCount(lanura => !lanura)}>
         {count ? "dark mode off" : "dark mode on"}
       </button>
      </header>
    </div>
  );
}

export default App;
