import './App.css';
import {useState, useEffect} from 'react'
import Header from './Components/Header'
import Navbar from './Components/Navbar';
import Body from './Components/Body'
import Characters from './Components/Characters';

function App() {
  const [characters, setCharacters] = useState([]);
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
      <Characters characters={characters}/>
    </div>
  );
}

export default App;

