import React, { useState } from "react";

const SearchForm = ({ onSearch }) => {
  // Setup state for city input
  const [city, setCity] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(city); // Call onSearch function from props with city as parameter
    setCity(""); // Clear input field
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default SearchForm;
