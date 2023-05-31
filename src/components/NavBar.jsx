import React from "react";
import SearchBar from "./SearchBar";
import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar({ onSearch }) {
  return (
    <div className="nav">
      <Link to="/Home">
        <button>Home</button>
      </Link>
      <Link to="/about">
        <button>About</button>
      </Link>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}
