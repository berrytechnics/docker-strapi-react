import './App.css';
import { useEffect, useState } from 'react';
const api = `http://localhost:1337/api`;
const token = "21d99230979f9e60672fe86551c1339642e6c69c08e75fadd10a9aa183d0f92f35ebcc770236608649cf0e4e316fbfebdb211172ecf04eb7ca06a2464ee37733709e731cf9b2d1a1400bd5adaff4d313bdd4975c1da53f8e3a14ecc210b4aebe61a0157fbfe8f6bb5a907fdce87caef21bf8e6d834f588baf5c94e82da065dde";

function App() {
  const [devices,setDevices] = useState({});
    useEffect(()=>{
      fetch(`${api}/devices`,{
        type: 'GET',
        headers : {Authentication: `Bearer ${token}`}
      })
      .then(res=>res.json())
      .then(res=>setDevices(res))
      .catch(err=>console.log(err))
    },[])
  // if(devices.length==0) setDevices("This is the boilerplate for a dockerized app using strapi and react.");
  return (
    <div className="App">
      <header className="App-header">
        <p>
         {JSON.stringify(devices.data[0].attributes) ?? 'Loading...'}
        </p>
      </header>
    </div>
  );
}

export default App;
