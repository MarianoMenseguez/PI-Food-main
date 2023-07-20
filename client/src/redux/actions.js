import axios from "axios";
import {
        GET_RECIPES,
        GET_RECIPE_ID,
        GET_DIETS,
        GET_RECIPE_NAME,
        LOADING,
        CLEAR_DETAIL,
        FILTERS,
        DELETE_RECIPE,
        
} from './types.js';

export const getRecipes = () => {
    return async function (dispatch) {
        dispatch({ type: LOADING })
        const apiData = await axios.get('http://localhost:3001/recipes');
        const users = apiData.data;
        dispatch({ type: GET_RECIPES, payload: users })
    };
}


export const getRecipeById = (id) =>{
    return async  function (dispatch) {
        const apiData = await axios.get(`http://localhost:3001/recipes/${id}`);
        const user = apiData.data;
        dispatch({ type: GET_RECIPE_ID, payload: user})
    }
}


export const deleteRecipeById = (id) => {
    return{
        type: DELETE_RECIPE,
        payload: id
    }
}


export const clearDetail = () =>{
    return { type: CLEAR_DETAIL }
}



export const getAllDiets = () => {
    return async function (dispatch) {
        dispatch({ type: LOADING })
        const apiData = await axios.get('http://localhost:3001/diets');
        const diets = apiData.data;
        dispatch({ type: GET_DIETS, payload: diets })
    }
}


export const postRecipes = (payload) => {
    return async function () {
        const postRecipe = await axios.post('http://localhost:3001/recipes', payload)
        return postRecipe
    }
}

export const postDiet = (payload) => {
    return async function () {
        const postDiet = await axios.post('http://localhost:3001/diets', payload)
        return postDiet
    }
}

export const recipeByName = (name) => {
    return async function (dispatch) {
        try {
            const allRecipesByName = await axios.get(`http://localhost:3001/recipes?name=${name}`)
            return dispatch({ type: GET_RECIPE_NAME, payload: allRecipesByName.data })
            
        } catch (error) {
            return dispatch({ type: GET_RECIPE_NAME, payload: [] })
        }
    }
}




export const filters = (payload) => {
    return{
        type: FILTERS,
        payload
    }
}








