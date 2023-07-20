const { Router  } = require('express');
const { putDietInfo } = require('../controllers/putDietInfo.js');
const { postDiet } = require('../controllers/postDiet.js');
const router = Router()

router.get("/", async (req, res) => {
    try {
        const allDiets = await putDietInfo();
        res.status(200).send(allDiets)
    } catch (error) {
        res.status(404).send(error);
    }
})


router.post('/', async (req, res) => {
    try {
   
      const newDiet = req.body;
  
    
      await postDiet(newDiet);
  
      
      res.status(201).send('Nueva dieta creada con éxito');
    } catch (error) {
       res.status(500).send('Error al crear la dieta');
    }
  });
  
  module.exports = router;

