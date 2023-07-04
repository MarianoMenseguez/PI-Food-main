const { Router  } = require('express');
const { Diet } = require('../db.js');
const { getApiInfo, putDietInfo } = require('../controllers/controllers.js');
const { extractDiets } = require('./utils.js');
const router = Router()

router.get("/", async (req, res) => {
    try {
        const allDiets = await putDietInfo();
        res.status(200).send(allDiets)
    } catch (error) {
        res.status(404).send(error);
    }
})




module.exports = router;