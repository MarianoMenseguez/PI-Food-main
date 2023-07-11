const { Router  } = require('express');
const { putDietInfo } = require('../controllers/putDietInfo.js');
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

// javascript
// Copy code
// const { Router } = require('express');
// const { Diet } = require('../db.js');
// const { putDietInfo } = require('../controllers/controllers.js');
// const router = Router();
// En este fragmento de código, se importan los módulos y funciones necesarios para el enrutamiento:

// Router: Se importa desde el módulo express para crear un nuevo objeto de enrutador.
// Diet: Se importa desde ../db.js y representa el modelo de la base de datos para las dietas.
// getApiInfo y putDietInfo: Se importan desde ../controllers/controllers.js y son funciones controladoras para obtener información de la API externa y guardarla en la base de datos.
// extractDiets: Se importa desde ./utils.js y es una función de utilidad para extraer las dietas de la información obtenida de la API.
// A continuación, se crea un nuevo enrutador utilizando Router() y se asigna a la variable router.

// javascript
// Copy code
// router.get("/", async (req, res) => {
//   try {
//     const allDiets = await putDietInfo();
//     res.status(200).send(allDiets);
//   } catch (error) {
//     res.status(404).send(error);
//   }
// });
// En este fragmento de código, se define una ruta GET en el enrutador. Cuando se recibe una solicitud GET en la ruta '/', se ejecuta una función asíncrona que intenta obtener y guardar la información de las dietas utilizando la función putDietInfo(). Si la operación es exitosa, se envía una respuesta con estado 200 y se envían todas las dietas obtenidas. Si hay un error, se envía una respuesta con estado 404 y se envía el error.

// javascript
// Copy code
// module.exports = router;
// Por último, se exporta el enrutador creado para que pueda ser utilizado por otros archivos que lo requieran.

// En resumen, este código exporta un enrutador con una ruta GET que obtiene y guarda información sobre las dietas en la base de datos. Esta ruta puede ser utilizada por el servidor principal para manejar las solicitudes relacionadas con las dietas.