
import './App.css';
import { useState } from 'react';
function App() {
  const [count, setCount] = useState(false);

  return (
    <div className={count ? "App":"Appa"} >
      <header className={count ? "App-header":"Appa-header"}>
      {count?<h1>Topa le leo</h1>:<h1>Nahi loge!</h1>} 
       <button onClick={() => setCount(lanura => !lanura)}>
        Lick me 
       </button>
      </header>
    </div>
  );
}

export default App;
