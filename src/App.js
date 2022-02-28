import './App.css';
import {useState } from "react";
import Datafatch from './API/Datafatch';

function App() {

  const [infodiv,useinfodiv] = useState(<div className='defaultinfo'></div>)
  
  return (
    <div className="App">
      <Datafatch useinfodiv={useinfodiv}  infodiv="infodiv" />
      {infodiv}
    </div>
  );
}

export default App;
