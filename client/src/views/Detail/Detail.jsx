import React from "react";
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getRecipeById, clearDetail } from "../../redux/actions";
import { useEffect } from "react";
import Loading from "../../components/Loading/Loading.jsx";
import './Detail.css';



const Detail = () => {

    //HOOKS
    const myRecipe = useSelector((state) => state.recipeDetail)
    const dispatch = useDispatch();
    const { id } =  useParams();

    //STATE
    let [loading, setLoading] = React.useState(false);
    
    //useEffect
    useEffect(()=>{
        setLoading(true);

		setTimeout(() => {
			setLoading(false);
		}, 1200);
        dispatch(getRecipeById(id))
        //cuando se desmonta
        return () => {
            dispatch(clearDetail())
        }
    },[dispatch, id])
    
    return(
        <div className="Detail">
            {!loading ? (
                    <>
                    <div className="detailContainer">
                            <div className="detailDentro">
                                {myRecipe.title ? (
                                    <h1>{myRecipe.title}</h1>
                                ) : (
                                    <h1>{myRecipe.name}</h1>
                                )}
                                <img src={myRecipe?.image}
                                alt="img not found"
                                width="280px"
                                height="200px"
                                />
                                <h2>
                                    Score:{" "}
                                    {myRecipe?.healthScore}
                                </h2>
                                <h2>
                                    Diets:{" "}
                                    {!myRecipe?.createdInDb
                                    ? myRecipe?.diets + " "
                                    : myRecipe?.diets.map((e) => e.name + " ")}
                                </h2>
                            </div>
                            <div className="detailContainerUno">
                                <p>Summary</p>
                                <div>
                                    {!myRecipe?.createdInDb
                                    ? myRecipe?.summary
                                    : myRecipe?.dishSummary}
                                </div>
        
                                <p>STEPS</p>
                                <div>
                                    {!myRecipe?.createdInDb
                                    ? myRecipe.analyzedInstructions && myRecipe?.analyzedInstructions[0]?.steps.map(s => {
                                        return (
                                            <li>{s.step}</li>
                                        )
                                    })
                                    : myRecipe?.steps[0].map(s => {
                                        
                                        return(
                                            <li>{s}</li>
                                        )
                                    })}
                                </div>
                            </div>
                    </div>
                        <Link to="/home">
                            <button id="buttonReturn">Return</button>
                        </Link> 
                    </>
                    
                ) : (
                <div>
                    <Loading />
                </div>
            )}
        </div>
        
        
        
        
    )

}
export default Detail;

