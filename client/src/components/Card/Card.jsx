import React from "react";
import './Card.css';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { deleteRecipeById } from "../../redux/actions";

const Card = ({image, name, diets, id }) => {

    let dispatch = useDispatch();

    const handleClose = () => {
        dispatch(deleteRecipeById(id))
    }

    return(
        <>
            <div className='card'>
                <img src={image} alt='image not found'></img>
                <h4>{name}</h4>
                <div className='messageContainer'>
                    <p>Diets: {diets + " "}</p>
                </div>
                <div className='divBtn'>
                    <Link to={`/detail/${id}`}>
                        <button className='btn'>View Recipe</button>
                    </Link>
                    <div className="closeBtn">
                        <button onClick={(e) => handleClose(e)} >
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                width={16} 
                                height={16} 
                                fill="currentColor" 
                                viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" /> 
                                <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;





