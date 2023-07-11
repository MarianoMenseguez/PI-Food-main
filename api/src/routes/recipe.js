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

//ESTA RUTA FUNCIONA
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
          through: { diets: [] },// mas seguridad aca
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
      // busca el nombre de la receta que coincida con el que me pasaron por query
      const recipeByName = await Recipe.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`, // utilizar el operador iLike para una búsqueda sin distinción entre mayúsculas y minúsculas
          },
        },
      });
      let nameFiltered = await getApiInfo();

      nameFiltered = nameFiltered.filter((recipe) =>
        recipe.name.toLowerCase().includes(name.toLowerCase())
      );

      let total = recipeByName.concat(nameFiltered);

      if (!total.length) {
        return res.status(404).json({ error: "Recipe not found" });
      }
      return res.status(200).json(total);
    } else {
      // sino, devolve el total de recetass
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
    if (!objRecipe) res.status(404).send("Missing info");
    const newRecipe = await postRecipe(objRecipe);

    return res.status(200).json(newRecipe);
  } catch (error) {
    return res.status(404).json(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  let { id } = req.params;

  try {
    let recipeToDelete = await deleteRecipe(id);

    if (recipeToDelete.error) {
      res.status(400).json({ error: recipeToDelete.error });
    } else {
      res.status(200).json({ message: recipeToDelete.message });
    }
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
});
module.exports = router;

// En resumen, este enrutador define varias rutas relacionadas con las recetas, incluyendo obtener información detallada de una receta, obtener todas las recetas o filtrar por nombre, crear una nueva receta y eliminar una receta según su id.
