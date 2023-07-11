const axios = require("axios");
const { API_KEY } = process.env;
const { simplifyContent } = require('../routes/utils.js');

const getApiInfo = async () => {
    
    let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`
    let apiRecipes = await axios.get(url);
    
    apiRecipes = simplifyContent(apiRecipes.data.results);
    
    return apiRecipes;
}


module.exports = {
    getApiInfo
}
