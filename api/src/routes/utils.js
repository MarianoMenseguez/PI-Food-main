const simplifyContent = (recipes) => {
  let array = [];

  for (const key in recipes) {
    const recipe = {};
    let thisRecipe = recipes[key];
    recipe.id = thisRecipe.id;
    recipe.name = thisRecipe.title;
    recipe.image = thisRecipe.image;
    recipe.dishSummary = thisRecipe.summary;
    recipe.healthScore = thisRecipe.healthScore;

    if (!recipes[key].analyzedInstructions.hasOwnProperty("steps")) {
      recipe.steps = [];
    } else {
      recipe.steps = recipes[key].analyzedInstructions["0"].steps;
    }

    recipe.diets = recipes[key].diets;
    const aux = {
      vegetarian: recipes[key].vegetarian,
      vegan: recipes[key].vegan,
      glutenFree: recipes[key].glutenFree,
    };
    for (const diet in aux) {
      if (!recipe.diets.includes(diet) && aux[diet] === true) {
        recipe.diets.push(diet);
      }
    }
    array.push(recipe);
  }

  return array;
};

const extractDiets = (recipes) => {
  let diets = [];

  recipes.map((r) => {
    r.diets.map((d) => {
      diets.push(d);
    });
  });
  return diets;
};

module.exports = {
  simplifyContent,
  extractDiets,
};
