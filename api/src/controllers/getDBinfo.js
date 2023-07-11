const { Recipe, Diet  } = require("../db.js");

const getDBinfo = async () => {

    const allDataAux = []

    let getAllInfo = await Recipe.findAll({
        include:{
            model: Diet,
        }
    });

    for (let i = 0; i < getAllInfo.length; i++) {

        const newAux = {
            id: getAllInfo[i].id,
            name: getAllInfo[i].name,
            image: getAllInfo[i].image,
            dishSummary: getAllInfo[i].dishSummary,
            healthScore: getAllInfo[i].healthScore,
            steps: getAllInfo[i].steps,
            createdInDb: getAllInfo[i].createdInDb,
        }

        const arrayAux = []
        getAllInfo[i].diets.map(e=>{
            arrayAux.push(e.name)
        })
        newAux.diets = arrayAux

        allDataAux.push(newAux)
    }
    
    return allDataAux;
}





module.exports = {
    getDBinfo
}

