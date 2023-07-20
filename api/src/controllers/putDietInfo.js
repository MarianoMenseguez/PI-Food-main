const { Diet  } = require("../db.js");

const putDietInfo = async () => {
    const dietTypes = [
        "gluten free",
        "dairy free",
        "lacto ovo vegetarian",
        "vegan",
        "paleolithic",
        "primal",
        "pescatarian",
        "fodmap friendly",
        "whole 30",
       
    ];
    dietTypes.forEach((d) => {
        Diet.findOrCreate({
            where: {
                name: d,
            }
        })
    })
    return Diet.findAll();

}

module.exports = {
    putDietInfo
}
