import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { recipeByName } from "../../redux/actions";
import style from '../SearchBar/SearchBar.module.css';

const SearchBar = () => {
    const dispatch = useDispatch();

    const [name, setName] = useState('')

    const handleInputChange = (e) =>{
        setName(e.target.value)
    }

    const handleSubmit = () =>{
        dispatch(recipeByName(name));
        setName("");
    }
    return(
        <div className={style.SearchContainer}>
            <input className={style.bar} type="text" placeholder="Find your recipe...🔍" onChange={(e) => handleInputChange(e)}  />
            <button className={style.search} type="submit" onClick={(e) => handleSubmit(e)}>Search</button>
        </div>
    )
}

export default SearchBar;

