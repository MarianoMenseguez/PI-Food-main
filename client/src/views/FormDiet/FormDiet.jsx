import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { postDiet, getAllDiets } from "../../redux/actions";
import validate from "../../validation/validationDiet";
import './FormDiet.css';




const Formdiet = () => {
    
    //HOOKS
    const dispatch = useDispatch();
    let navigate = useNavigate();
    
    //STATES
    const [form, setForm] = useState({
        diets: "",
    })

    const [errors, setErrors] = useState({
        diets : "Need to write the diet",
       
    })
    
    //EFFECTS
    useEffect(() => {
        dispatch(getAllDiets())
    },[dispatch])
    
    //FUNCTIONS


    const changeHandler = (event) => {
        const property = event.target.name
        const value = event.target.value

        setErrors(validate({
            ...form,
            [property]: value 
        }))
        setForm({ 
            ...form,
            [property]: value 
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        dispatch(postDiet(form))
        alert("You just set the new Diet")
        setForm({
            diets: "",
        })
        navigate('/home')
    }

   
  


    return(
        <div>
            <div className="buttonReturn">
                <Link to= '/home'>
                    <button className="button">Return</button>
                </Link>
            </div>
            <h1 id="title">Create your own Diet !</h1>
            <form onSubmit={(e) =>submitHandler(e)} className="Formulario">
                <div className="inputs">
                    <div>
                        <label>Diet:  </label>
                        <input 
                            type="text" 
                            value={form.name} 
                            onChange={(e) =>changeHandler(e)} 
                            name="name" 
                            placeholder="Write Diet name..."/>
                            
                        {errors.name && <strong>{errors.name}</strong>}
                    </div>
                    <button
                        type="submit"
                        disabled={errors.name}
                        className="button"
                    >Create Diet</button>
                </div>

            </form>
        </div>
    )
}

export default Formdiet;
