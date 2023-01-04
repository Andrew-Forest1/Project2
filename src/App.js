import './App.css';
import {useState, useEffect} from 'react'
import { Routes, Route } from "react-router-dom";
import Header from './Components/Header'
import Navbar from './Components/Navbar';
import Body from './Components/Body'
import Characters from './Components/Characters';
import Form from './Components/Form';

function App() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState("/home")

  const fetchCharacters = async () => {
    try {
      const resp = await fetch(`http://localhost:3001/characters`)
      const data = await resp.json()
      //console.log(data)
      setCharacters([...data])
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    fetchCharacters()
  }, []);

  return (
    <div>
      <Navbar/>
{/*       <Routes>
        <Route path="/characters" element={}/>
      </Routes> */}
{/*       <Characters characters={characters}/> */}
      <Form />
      <div class="video-container">
        <iframe src="https://www.youtube.com/embed/s7L2PVdrb_8?&autoplay=1&mute=1&playsinline=1&playlist=s7L2PVdrb_8&loop=1"/>
      </div>
      
      
    </div>
  );
}

export default App;

