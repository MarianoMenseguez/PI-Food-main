const { Recipe, Diet } = require ("../db.js");



const deleteRecipe = async (id) => {
   
        let recipeDelete = await Recipe.findOne({
            where: { id },
            include: [Diet],
        });

        if (!recipeDelete){
            throw new Error(`No se encontro ninguna receta con el id ${id}`);
        }

        const elem = await recipeDelete.destroy({
            where: { id: `${id}` }
        });

        return (`La receta con el id ${id} se elimino correctamente`);
            
    
}

module.exports = {
    deleteRecipe
}

