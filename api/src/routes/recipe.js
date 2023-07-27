const { Router } = require("express");
const { Recipe, Diet } = require("../db.js");
const { deleteRecipe } = require("../controllers/deleteRecipe.js");
const { postRecipe } = require("../controllers/postRecipe.js");
const { getApiInfo } = require("../controllers/getApiInfo.js");
const { getDBinfo } = require("../controllers/getDBinfo.js");
const { Op } = require("sequelize");
const { API_KEY } = process.env;
const axios = require("axios");

const router = Router();


router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    let findIdApi = await axios.get(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
    );

    return res.status(200).json(findIdApi.data);
  } catch (error) {
    try {
      const { id } = req.params;

      const recipeById = await Recipe.findByPk(id, {
        include: {
          model: Diet,
          attributes: ["name"],
          through: { diets: [] },
        },
      });

      return res.status(200).json(recipeById);
    } catch (error) {
      return res.status(404).json({ message: "Recipe not found" });
    }
  }
});


router.get("/", async (req, res) => {
  const { name } = req.query;

  try {
    if (name) {
      // Busca el nombre de la receta que coincida con el que se pasó por query
  
      const recipeByName = [];
      const recipeArrayByName = await Recipe.findAll({
        include: {
          model: Diet,
          attributes: ["name"],
        },
        where: {
          name: {
            [Op.iLike]: `%${name}%`, // Utilizar el operador iLike para una búsqueda sin distinción entre mayúsculas y minúsculas
          },
        },
      });
  
      for (let i = 0; i < recipeArrayByName.length; i++) {
        const newAux = {
          id: recipeArrayByName[i].id,
          name: recipeArrayByName[i].name,
          image: recipeArrayByName[i].image,
          dishSummary: recipeArrayByName[i].dishSummary,
          healthScore: recipeArrayByName[i].healthScore,
          steps: recipeArrayByName[i].steps,
          createdInDb: recipeArrayByName[i].createdInDb,
        };
  
        const arrayAux = [];
        recipeArrayByName[i].diets.map((e) => {
          arrayAux.push(e.name);
        });
        newAux.diets = arrayAux;
        recipeByName.push(newAux);
      }
        let nameFiltered = await getApiInfo();
              nameFiltered = nameFiltered.filter((recipe) =>
                recipe.name.toLowerCase().includes(name.toLowerCase())
              );
      let total = recipeByName;
  
      if (recipeByName.length > 0) {
        return res.status(200).json(total);
      } else {
        
        total = recipeByName.concat(nameFiltered);
  
        if (!total.length) {
          return res.status(404).json({ error: "Recipe not found" });
        }
  
        return res.status(200).json(total);
      }
    } else {
      let totalApiRecipes = await getApiInfo();
      let totalDbRecipes = await getDBinfo();
      let totalRecipes = totalApiRecipes.concat(totalDbRecipes);
      return res.status(200).json(totalRecipes);
    }
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
});


router.post("/", async (req, res) => {
  
  try {
    const objRecipe = req.body;
    console.log(objRecipe);
    if (!objRecipe) res.status(400).send("Missing info");
    const newRecipe = await postRecipe(objRecipe);

    return res.status(200).json(newRecipe);
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  let { id } = req.params;

  try {
    let recipeToDelete = await deleteRecipe(id);
    return res.status(200).send(recipeToDelete);

  } catch (error) {
    return res.status(400).send(error.message);
  }
});
module.exports = router;