function Character({Name, Image}){
    return(
        <div className="card">
            <img className="image" src={Image} alt={Name}/>
            <p>{Name}</p>
        </div>
    )
}

export default Character