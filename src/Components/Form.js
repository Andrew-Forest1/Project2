import { useState } from "react"

function Form(){
    const [newCharacter, setNewCharacter] = useState({});
    const handleChange = () => {

    }
    //Name, Image, IsFemale, Culture, Titles, Aliases, Born, Died, PlayedBy
    return(
        <div>
            <form className="characterForm">
                <label for="name">Name</label>
                <input type="text" name="name" onChange={handleChange} value={newCharacter.Name}/>
                <label for="image">Image</label>
                <input type="image" name="image" onChange={handleChange} value={newCharacter.Image}/>
                <label for="sex">Sex</label>
                <input type="text" name="sex" onChange={handleChange} value={newCharacter.IsFemale}/>
                <label for="culture">Culture</label>
                <input type="text" name="culture" onChange={handleChange} value={newCharacter.Culture}/>
                <label for="titles">Titles</label>
                <input type="text" name="titles" onChange={handleChange} value={newCharacter.Titles}/>
                <label for="aliases">Aliases</label>
                <input type="text" name="aliases" onChange={handleChange} value={newCharacter.Aliases}/>
                <label for="born">Born</label>
                <input type="text" name="born" onChange={handleChange} value={newCharacter.Born}/>
                <label for="died">Died</label>
                <input type="text" name="died" onChange={handleChange} value={newCharacter.Died}/>
                <label for="playedBy">Played By</label>
                <input type="text" name="playedBy" onChange={handleChange} value={newCharacter.PlayedBy}/>
            </form>
        </div>
    )
}

export default Form