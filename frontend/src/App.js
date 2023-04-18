import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [devices,setDevices] = useState("");
  if(devices.length==0) setDevices("This is the boilerplate for a dockerized app using strapi and react.");
  return (
    <div className="App">
      <header className="App-header">
        <p>
         {devices}
        </p>
      </header>
    </div>
  );
}

export default App;
