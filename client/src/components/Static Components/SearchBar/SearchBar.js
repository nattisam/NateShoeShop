import { useState } from "react";
import './SearchBar.scss';

const SearchBar = () => {

    const [inputValue, setInputValue] = useState('');

    const handleFormSubmit = () => {
      // Handle form submission or perform action with inputValue
      console.log(inputValue);
    };

    return(
        <div className="searchBar-container">
            <div className="search-area">
                <input
                    type="text"
                    value={inputValue}
                    placeholder="Search for Shoe"
                    onChange={(e) => setInputValue(e.target.value)}
                />
            </div>
            <div className="primary-btn">
                <button onClick={handleFormSubmit}>Search</button>
            </div>
        </div>
    )
} 

export default SearchBar;