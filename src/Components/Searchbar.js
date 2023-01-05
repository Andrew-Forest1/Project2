function Searchbar({searchCharacters, setSearchCharacters}) {


    // const handleSubmit = () => {
    //     e.preventDefault();
    // }
    const handleChange = (e) => {
        setSearchCharacters(e.target.value);
    }

    return (
        <div className="searchbar">
            <input 
                value={searchCharacters}
                onChange={handleChange}
                className="search-input" 
                placeholder="Search for a Character..." />
            
        </div>
    );
}

export default Searchbar;