import { IoIosSearch } from "react-icons/io";
import { useState } from "react";

function SearchLocation({ changeLocation }) {
  const [searchInput, setSearchInput] = useState("");
  const [searchName, setSearchName] = useState("");
  function handleSearchChange(e) {
    const { value } = e.target;
    setSearchInput(value);
  }
  function handleSubmit() {
    changeLocation(searchInput);
  }

  return (
    <div className="search-div">
      <div id="search-icon-div">
        <IoIosSearch
          id="search-icon"
          style={{
            fontSize: "1.6rem",
            margin: "0px",
          }}
        />
      </div>
      <input
        type="search"
        placeholder="Search location"
        onChange={handleSearchChange}
        value={searchInput}
      />
      <button
        id="search-btn"
        onClick={() => {
          handleSubmit();
        }}
      >
        search
      </button>
    </div>
  );
}

export default SearchLocation;
