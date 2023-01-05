function Navbar({setPage}){
    return (
        <nav className="navbar" id="navbar">
            <a className="site-title" href="home" onClick={()=>{setPage("/home")}}>Game of Thrones</a>
            <ul>
                <li onClick={()=>{setPage("/form")}}><a href="Add">Add Character</a></li>
                <li onClick={()=>{setPage("/characters")}}><a href="characters">Characters</a></li>
                <li><a href="houses">Houses</a></li>
            </ul>
        </nav>
    )
}

export default Navbar