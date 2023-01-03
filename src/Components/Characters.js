import Character from "./Character"

function Characters({characters}){
    const renderCharacters = characters.map((character) => {
        return <Character {...character} key={character.id}/>
    })
    return(
        <div className="container">
            {renderCharacters}
        </div>
    )
}

export default Characters