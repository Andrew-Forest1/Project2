import './App.css';
import {useState, useEffect} from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home'
import Navbar from './Components/Navbar';
import Body from './Components/Body'
import Characters from './Components/Characters';
import Form from './Components/Form';
import Searchbar from './Components/Searchbar';

function App() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState("/home")
  const [searchCharacters, setSearchCharacters] = useState("");

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

  const routing = () => {
    switch (page) {
      case "/home":
        return (
          <Route path="/home">
            <Home/>
          </Route>
        )
        break;

      case "/characters":
        return (
          <Route path="/characters">
            <Characters characters={characters}/>
          </Route>
        ) 
        break;

        case "/form":
          return (
            <Route path="/form">
              <Form setCharacters={setCharacters}/>
            </Route>
          )
          break;
    
      default:
        return <Route path="/home"/>
        break;
    }
  }

  const filteredCharacters = characters.filter(character => character.Name.toLowerCase().includes(searchCharacters.toLocaleLowerCase()))

  return (
    <div className="main">
      <Navbar setPage={setPage}/>
      <Searchbar searchCharacters={searchCharacters} setSearchCharacters={setSearchCharacters} />
      <Characters characters={filteredCharacters}/>
{/*       {routing()} */}
      <div class="video-container">
        <iframe src="https://www.youtube.com/embed/s7L2PVdrb_8?&autoplay=1&mute=1&playsinline=1&playlist=s7L2PVdrb_8&loop=1"/>
      </div>
      
      
    </div>
  );
}

export default App;

