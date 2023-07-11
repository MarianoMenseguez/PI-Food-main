const { Router } = require('express');
// Importar todos los routers;
const recipesRouter = require("./recipe.js");
const dietsRouter = require('./diet.js');
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/recipes', recipesRouter);
router.use('/diets', dietsRouter);

module.exports = router;


// javascript
// Copy code
// const { Router } = require('express');
// // Importar todos los routers;
// const recipesRouter = require("./recipe.js");
// const dietsRouter = require('./diet.js');
// // Ejemplo: const authRouter = require('./auth.js');

// const router = Router();
// En este fragmento de código, se importa el módulo Router desde el paquete express, lo cual permite crear un nuevo objeto de enrutador. También se importan otros enrutadores desde los archivos recipe.js y diet.js.

// javascript
// Copy code
// router.use('/recipes', recipesRouter);
// router.use('/diets', dietsRouter);
// En estas líneas de código, se configuran los enrutadores en el enrutador principal (router).

// router.use('/recipes', recipesRouter): Establece el enrutador recipesRouter para manejar todas las rutas que comiencen con /recipes. Esto significa que todas las solicitudes a rutas como /recipes, /recipes/:id, etc., serán manejadas por recipesRouter.
// router.use('/diets', dietsRouter): Establece el enrutador dietsRouter para manejar todas las rutas que comiencen con /diets. Esto significa que todas las solicitudes a rutas como /diets, /diets/:id, etc., serán manejadas por dietsRouter.
// Estos enrutadores pueden contener rutas y lógica específica para cada tipo de recurso (recetas, dietas, etc.).

// javascript
// Copy code
// module.exports = router;
// En esta línea de código, el enrutador principal (router) se exporta para que pueda ser utilizado en otros archivos.

// En resumen, este código configura un enrutador principal que utiliza diferentes enrutadores (recipesRouter y dietsRouter) para manejar las rutas relacionadas con recetas y dietas, respectivamente. Al exportar el enrutador principal, se puede utilizar en otro archivo para establecer las rutas de la API de acuerdo con las rutas definidas en los enrutadores específicos.

