const { Router } = require('express');

const recipesRouter = require("./recipe.js");
const dietsRouter = require('./diet.js');



const router = Router();


router.use('/recipes', recipesRouter);
router.use('/diets', dietsRouter);

module.exports = router;

