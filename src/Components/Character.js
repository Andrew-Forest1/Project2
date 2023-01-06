import { useState } from "react";

function Character({Name, Image, IsFemale, Culture, Titles, Aliases, Born, Died, PlayedBy}){
    const [hover, setHover] = useState(false);
    
    const displayTitles = Titles.map((title) => {
        return <li>{title}</li>
    })

    const displayAliases = Aliases.map((aliase) => {
        return <li>{aliase}</li>
    })

    return(
        <div className="card" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            {hover ? (<div className="cardBack">
                <h1>{Name}</h1>
                <h2>Titles</h2>
                <ul>
                    {displayTitles}
                </ul>
                <h2>Aliases</h2>
                <ul>
                    {displayAliases}
                </ul>
                <p>Culture: {Culture ? Culture : "No Cultural Affiliations"}</p>
                <p>Born: {Born ? Born : "Unknown"}</p>
                <p>Status: {Died ? "Died " + Died : "Alive"}</p>
                <p>Played by: {PlayedBy}</p>
            </div>)
             : (<div className="cardFront">            
                <img className="image" src={Image} alt={Name}/>
                <p>{Name}</p>
            </div>)}
        </div>
    )
}

export default Character