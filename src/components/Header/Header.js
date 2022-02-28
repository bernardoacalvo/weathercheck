import React from "react";
import "./Header.css";
import SearchForm from "./SearchForm";

function Header(props) {
  return (
    <header className="header">
      <SearchForm onSubmitForm={props.onSubmitForm} />
      <div className="header__logo">
        <img src="/logo.png" alt="logo" className="logo__icon"></img>
        <span className="logo__text">WeatherCheck</span>
      </div>
    </header>
  );
}

export default Header;
