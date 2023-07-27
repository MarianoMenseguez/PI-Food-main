const { Router } = require("express");
const { putDietInfo } = require("../controllers/putDietInfo.js");
const { postDiet } = require("../controllers/postDiet.js");

const { Diet } = require("../db.js");
const router = Router();

router.get("/", async (req, res) => {
  try {
    const allDiets = await putDietInfo();
    res.status(200).send(allDiets);
  } catch (error) {
    res.status(404).send(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const objDiet = req.body;

    if (!objDiet) res.status(400).send("Missing info");
    const newDiet = await postDiet(objDiet);

    return res.status(200).json(newDiet);
  } catch (error) {
    res.status(500).send("Error al crear la dieta");
  }
});

module.exports = router;
