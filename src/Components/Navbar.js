function Navbar(){
    return (
        <nav className="navbar" id="navbar">
            <a className="site-title" href="#home">Game of Thrones</a>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#characters">Characters</a></li>
                <li><a href="#houses">Houses</a></li>
            </ul>
        </nav>
    )
}

export default Navbar