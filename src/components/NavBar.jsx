import React from "react";
import SearchBar from "./SearchBar";
import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar({ onSearch, logout }) {
  return (
    <div className="nav">
      <Link to="/Home">
        <button className="btn-nav-home">Home</button>
      </Link>
      <Link to="/about">
        <button className="btn-nav" >About</button>
      </Link>
      <SearchBar onSearch={onSearch} />
     
        <button className="btn-nav" onClick={logout} >LogOut</button>
      
    </div>
  );
}
