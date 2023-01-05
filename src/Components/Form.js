import { useState } from "react"
import Character from "./Character";

function Form({setCharacters}){
    const [newCharacter, setNewCharacter] = useState({
        //{"Id":784,"Name":"Olenna Redwyne","IsFemale":true,"Culture":"","Titles":["Dowager Lady of Highgarden"],"Aliases":["The Queen of Thorns"],"Born":"In 228 AC, at Arbor","Died":"","Father":null,"Mother":null,"Spouse":664,"Children":[],"Allegiances":[317,398],"Books":[1,2,3,5,8],"PovBooks":[],"PlayedBy":["Diana Rigg"],"TvSeries":["Season 3","Season 4", "Season 6"]},

        Name: "Olenna Redwyne", 
        Image: "https://upload.wikimedia.org/wikipedia/en/d/da/Olenna_Tyrell-Diana_Rigg.jpg", 
        IsFemale: true, 
        Culture:"", 
        Titles:"Dowager Lady of Highgarden", 
        Aliases:"The Queen of Thorns", 
        Born:"In 228 AC, at Arbor",
        Died:"", 
        PlayedBy:"Diana Rigg"
    });
    const [creating, setCreating] = useState(true);

    const handleChange = (e) => {
        //cons
        e.target.name==="IsFemale" ? setNewCharacter(current => ({...newCharacter, IsFemale:!current.IsFemale})) : setNewCharacter({...newCharacter, [e.target.name]:e.target.value})
        console.log()
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        //setNewCharacter({...newCharacter, Titles:stringToArray(newCharacter.Titles), Aliases:stringToArray(newCharacter.Aliases)})

        newCharacter.Titles = stringToArray(newCharacter.Titles)
        newCharacter.Aliases = stringToArray(newCharacter.Aliases)

        fetch("http://localhost:3001/characters", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(newCharacter)
        })
        .then(res => res.json())
        .then(addCharacter)
        .catch((error) => {
            console.log(error)
          })
    }

    const stringToArray = (str) => {
        return str.split('\n')
    }

    const addCharacter = (newData) => {
        setCharacters(current => [...current, newData])
        setCreating(false)
    }

    const handleClick = () => {
        setNewCharacter({
            Name: "", 
            Image: "", 
            IsFemale: true, 
            Culture:"", 
            Titles:"", 
            Aliases:"", 
            Born:"",
            Died:"", 
            PlayedBy:""
        });
        setCreating(true)
    }

    //Name, Image, IsFemale, Culture, Titles, Aliases, Born, Died, PlayedBy
    return(
        <div className="formContainer">
            <h1>{creating ? "Add Character" : "Character Added"}</h1>
            {creating ? (
                <form className="characterForm" onSubmit={handleSubmit}>
                <label for="Name">Name</label>
                <input type="text" name="Name" onChange={handleChange} value={newCharacter.Name}/>
                <label for="Image">Image</label>
                <input type="text" name="Image" onChange={handleChange} value={newCharacter.Image}/>
                <label>Sex</label>
                <label>
                    <input
                    type="radio"
                    name="IsFemale"
                    value="male"
                    checked={!newCharacter.IsFemale}
                    onChange={handleChange}
                    />
                    {" "}
                    Male
                </label>
                <label>
                    <input
                    type="radio"
                    name="IsFemale"
                    value="female"
                    checked={newCharacter.IsFemale}
                    onChange={handleChange}
                    />
                    {" "}
                    Female
                </label>
                <label for="Culture">Culture</label>
                <input type="text" name="Culture" onChange={handleChange} value={newCharacter.Culture}/>
                <label for="Titles">Titles</label>
                <textarea name="Titles" rows={3} onChange={handleChange} value={newCharacter.Titles}/>
                <label for="Aliases">Aliases</label>
                <textarea name="Aliases" rows={3} onChange={handleChange} value={newCharacter.Aliases}/>
                <label for="Born">Born</label>
                <input type="text" name="Born" onChange={handleChange} value={newCharacter.Born}/>
                <label for="Died">Died</label>
                <input type="text" name="Died" onChange={handleChange} value={newCharacter.Died}/>
                <label for="PlayedBy">Played By</label>
                <input type="text" name="PlayedBy" onChange={handleChange} value={newCharacter.PlayedBy}/>
                <input type="submit" value="Create"/>
            </form>
            ) : (
                <div className="addedCharacter">
                    <Character {...newCharacter}/>
                    <button onClick={handleClick}>Continue</button>
                </div>
            )}
        </div>
    )
}

export default Form