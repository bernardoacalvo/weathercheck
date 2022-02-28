import React, { useState } from "react";
import PropTypes from "prop-types";

import SearchIcon from "@material-ui/icons/Search";
import "./SearchForm.css";

function SearchForm(props) {
  const [location, setLocation] = useState("Lisbon");
  const onSubmit = (e) => {
    e.preventDefault();
    if (!location || location === "") return;
    props.onSubmitForm(location);
  };

  return (
    <form onSubmit={onSubmit} className="search">
      <input
        type="text"
        placeholder="Lisbon"
        className="search__text"
        required
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button type="submit" className="search__button">
        <SearchIcon style={{ fontSize: "30px" }} />
      </button>
    </form>
  );
}

SearchForm.PropType = {
  submitSearch: PropTypes.func.isRequired,
};

export default SearchForm;
