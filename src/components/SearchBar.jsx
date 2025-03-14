import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
    const [city, setCity] = useState("");

    const handleSearch = () => {
        onSearch(city); // Pass city to parent, where error handling occurs
    };

    return (
        <div className="search-bar">
            <input 
                type="text" 
                placeholder="Enter city name..."
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button onClick={handleSearch}><FaSearch />Search</button>
        </div>
    );
};

export default SearchBar;
