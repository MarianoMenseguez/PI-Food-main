const { Recipe, Diet } = require("../db.js");

const postRecipe = async (objRecipe) => {
  try {
    console.log(objRecipe)
    const { name, image, dishSummary, healthScore, steps, diets } = objRecipe;
    const recipe = {
      name,
      image,
      dishSummary,
      healthScore,
      diets,
      steps: [steps],
      
    };
    const createRecipe = await Recipe.create(recipe);

    for (let i = 0; i < diets.length; i++) {
      const diet = await Diet.findAll({
        where: {
          name: diets[i],
        },
      });

      await createRecipe.addDiets(diet[0].id);
    }

    return await Recipe.findAll({
      where: {
        name: recipe.name,
      },
      include: {
        model: Recipe,
      },
    });

  } catch (error) {
    return error;
  }
};

module.exports = {
  postRecipe,
};
