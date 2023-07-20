const { Diet  } = require("../db.js");



const postDiet = async (dietName) => {
    try {
        const {name} =  dietName;
        const diet = {
            name,
        }
        const createDiet = await Diet.create(diet);
        
       
        return createDiet;
    } catch (error) {
        
        return error;

    }
}

module.exports = {
    postDiet
}
