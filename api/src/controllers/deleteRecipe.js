const { Recipe, Diet, RecipeDiet } = require ("../db.js");



const deleteRecipe = async (id) => {
   
        let recipeDelete = await Recipe.findOne({
            where: { id },
            include: [Diet],
        });

        if (!recipeDelete){
            throw new Error(`No se encontro ninguna receta con el id ${id}`);
        }
        await RecipeDiet.destroy({
            where : { recipeId: id }
        })

        await recipeDelete.destroy({
            where: { id: `${id}` }
        });

        return (`La receta con el id ${id} se elimino correctamente`);
            
    
}

module.exports = {
    deleteRecipe
}

