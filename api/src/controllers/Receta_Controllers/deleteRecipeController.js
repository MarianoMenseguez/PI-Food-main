const { Recipe } = require("../../db");

const deleteRecipe = async (id) => {
  try {
    let recipeDelete = await Recipe.findOne({
      where: {
        id: id,
      },
    });
    if (!recipeDelete) {
      return {
        error: `No se encontro ninguna receta con el id ${id}`,
      };
    }
    await recipeDelete.destroy();
    return {
      message: `La receta con el id ${id} se elimino correctamente`,
    };


  } catch (error) {
    
    return {
      error: "Error al intentar borrar la receta",
    };
  }
};
module.exports = deleteRecipe;
