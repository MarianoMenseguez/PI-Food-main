# **💪 HW8 | React Estado LifeCycle - Integration**

## **🕒 DURACIÓN ESTIMADA**

90 minutos

<br />

---

<div align="center">

## **💻 RICK AND MORTY APP 💻**

</div>

## **📝 INTRO**

Hasta el momento, en nuestra **Rick & Morty App** tenemos estos 3 componentes: **Card**, **Cards** y **SearchBar**.

Adicionalmente, crearemos otro componente denominado **`Nav`** que será nuestra barra superior de navegación, el cual envolverá a la **`SearchBar`**.

<br />

---

## **📋 INSTRUCCIONES**

### **👩‍💻 EJERCICIO 1 | Nav**

1. Dirígete a tu archivo **`App.js`** y elimina tu SearchBar.
2. Crear el componente **`Nav`** dentro de la carpeta "**_components_**".
3. Renderiza la SearchBar dentro de este componente.

<br />

---

### **👩‍💻 EJERCICIO 2 | Home**

1. Elimina la **Card** "_suelta_" que se está renderizando.

2. Importa y renderiza el componente **`Nav`**.

3. ¡Aplica los estilos que más quieras!

Puedes guiarte a partir de la siguiente imagen cómo puede quedar tu aplicación:

<img src="./img/layout.png" width='800px'/>

> -  **Recuadro rojo**: Nav
> -  **Recuadro amarillo**: SearchBar
> -  **Recuadro verde**: Cards
> -  **Recuadro azul**: Card

<br />

---

### **👩‍💻 EJERCICIO 3 | Estado**

En este momento estamos dependiendo de un archivo **`data.js`** para recibir a los personajes. Lo que haremos ahora será crear un estado que nos permita almacenar personajes directamente.

Para esto, dirígete al componente **`App.js`** y:

1. Elimina el import y el archivo **`data.js`**. A partir de ahora ya no lo utilizaremos.
2. Importa el hook useState.
3. Crea un estado local llamado `characters` el cual se debe inicializar como un arreglo vacío.

<br />

---

### **👩‍💻 EJERCICIO 4 | On Search**

Ahora crearás una función llamada **`onSearch`** que te servirá para agregar nuevos personajes al estado que creaste en el ejercicio anterior.

1. Crea una función llamada **onSearch** en tu archivo **`App.js`**.
2. Cada vez que esta función sea ejecutada deberá agregar un nuevo personaje a tu estado local **characters**.

Como por el momento no vamos a recibir nuevos personajes, utilizaremos uno "_por default_". Es decir, cada vez que se ejecute la función anterior se debe agregar este personaje al estado local.

```js
const example = {
   id: 1,
   name: 'Rick Sanchez',
   status: 'Alive',
   species: 'Human',
   gender: 'Male',
   origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
   },
   image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
};
```

<br />

---

### **👩‍💻 EJERCICIO 5 | SearchBar & onSearch**

Una vez que hayas creado la función **`onSearch`** deberás:

1. Pasársela como propiedad al componente **`Nav`**.
2. Pasársela como propiedad al componente **`SearchBar`**.

¡Listo! Si levantas tu proyecto y compruebas en tu navegador, cade vez que haces click sobre el botón "**_Agregar_**", se mostrará un nuevo personaje. Debería quedar algo así:

<img src="./img/onSearchFunction.gif" alt="" />

<br />

---

## **🔎 ALTO AQUÍ**

Hasta el momento podemos agregar a un mismo personaje dentro de nuestra aplicación, pero... ¿Cómo podríamos agregar a distintos personajes?

🤓 Una buena idea sería utilizar nuestra SearchBar, ¿no te parece?

Podríamos escribir dentro de nuestra SearchBar el **ID** de un personaje, y que este se agregue automáticamente en nuestra aplicación.

✅ ¡Sigamos para descrubir cómo llevar esto a cabo!

<br />

---

### **👩‍💻 EJERCICIO 6 | Parámetros**

Ahora nos dirigiremos a la **`SearchBar`** para realizar algunas modificaciones. De esta forma podremos guardar el **ID** que escriba el usuario de nuestra aplicación.

1. Importa y crea un estado local llamado **id**. Debe inicializarse como un string vacío.
2. Crea una función **handleChange** de modo que, cada vez que el usuario escriba algo en el input, este se guarde en el estado local **id**.
3. No te olvides de pasarle esta función al input, y asignarle a este el estado local como su **`value`**.
4. Una vez que hayas cumplido con todos estos pasos, asegúrate de que cada vez que se ejecute la función **`onSearch`** esa reciba el estado **id** como argumento.

<br />

---

### **👩‍💻 EJERCICIO 7 | API Connection**

Ahora modificaremos la función **`onSearch`** para que busque nuevos personajes en la API de [**Rick & Morty**](https://rickandmortyapi.com). Para esto:

1. Instala la dependencia "**axios**". Una vez instala impórtala en el componente **`App.js`**.

2. Elimina la función **`onSearch`** que ya creaste y remplázala por esta nueva función:

```js
function onSearch(id) {
   axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
}
```

> [**NOTA**]: como aún no hemos visto promesas, tienes este snippet para que copies la funcionalidad.

<br />

---

### **👩‍💻 EJERCICIO 8 | On Close**

En este momento, el componente **`Cards`** les está pasando al componente **`Card`** una función llamada **onClose**. Esta función no está realizando nada más que mostrar un aviso en el navegador. ¡Ahora le daremos la funcionalidad que estamos buscando! Para esto:

1. Dirígete a tu componente **`App.js`** y crea una función con el nombre **onClose**. Esta función recibirá por parámetro un **id**.
2. Dentro de la función deberás realizar un filtro de tu estado local en el que te quedes con todos aquellos personajes cuyo **id** sea distinto al que recibes por parámetro.

> [**NOTA**]: el id que recibes por parámetro es un string, pero el que debes comparar en tus personajes es un number. ¡Parséalo!

3. Setea este resultado en tu estado local **characters**.
4. Dirígete al componente **`Cards`** y envíale el **id** del personaje como propiedad al componente **`Card`**.
5. Finalmente dirígete al componente **`Card`** y pasále el **id** que recibes por props a la funcion **onClose** cuando se ejecuta.

Ahora solo queda que pases esta función al componente **`Cards`**, y que este se la pase al componente **`Card`**.

Este es el resultado esperado:

<img src="./img/final.gif" width='800px'/>

<br />

---

## **📌 EJERCICIO EXTRA**

1. Controla que no se puedan agregar personajes repetidos que ya se muestran en pantalla.

2. Crea un botón en tu componente **`Nav`** que te permita agregar un personaje random.

> [**NOTA**]: hay 826 personajes en total.






# //////////////////////////////////////////////////////////////////////////////////////////////////////////////
# //////////////////////////////////////////////////////////////////////////////////////////////////////////////
# //////////////////////////////////////////////////////////////////////////////////////////////////////////////







# **💪 HW9 | React Routing - Integration**

## **🕒 DURACIÓN ESTIMADA**

90 minutos

<br />

---

<div align="center">

## **💻 RICK AND MORTY APP 💻**

</div>

## **📝 INTRO**

En esta homework integraremos **React Router DOM** para enrutar las distintas vistas de nuestra aplicación. Esto quiere decir que podremos decidir en que path o "link" se renderice cada componente.

<br />

---

## **📋 INSTRUCCIONES**

### **👩‍💻 EJERCICIO 1 | Instalación y configuración**

1. Instala **`react-router-dom`** desde la terminal.
2. Una vez hecho esto, dirígete al archivo **`index.js`** e importa y envuelve toda tu aplicación con "**BrowserRouter**".
3. Importa los componentes "**Routes**" y "**Route**" de _react-router-dom_ en tu archivo **`App.js`**.

<br />

---

### **👩‍💻 EJERCICIO 2 | About**

Ahora crearemos un componente para presentar nuestro perfil. Crea un componente llamado **`About`**. Este componente será una vista que contenga tu información.

Esto es completamente libre. Puedes mostrar incluso una imagen tuya. Esto le servirá a las personas que vean tu App para conocer al creador 🚀✨.

Una vez construido el componente:

1. Dirígete al componente **`Nav`** e importa la etiqueta **Link**.
2. Crea dos botones. Uno con el texto "**About**" y que te redirija a **`/about`**, y otro con el texto "**Home**" que te redirija a **`/home`**.

> [**NOTA**]: podrías utilizar NavLink para darle estilos al link About y Home.

<br />

---

### **👩‍💻 EJERCICIO 3 | Routing**

Comenzaremos creando un componete llamador **Deatil** el cual solo mostrara una etiqueda **`div`** vacía.

Luego, dirígete al archivo **`App.js`**. Ahora crearemos las rutas de los componentes. Cada componente debe renderizarse en las siguientes rutas:

-  **Nav** debe que aparecer en todas las rutas.
-  **Cards** debe aparecer solo en la ruta **`/home`**.
-  **About** debe aparecer solo en la ruta **`/about`**.
-  **Detail** debe aparecer solo en la ruta **`/detail/:id`**.

> [**NOTA**]: ten en cuenta que la ruta del componente **Detail** recibe un parámetro **`id`**.

Comprueba en tu navegador que cada componente se renderice en la ruta indicada. Debería quedarte de esta manera:

<img src="./img/rutas.gif" alt="" />

<br />

---

### **👩‍💻 EJERCICIO 4 | Detail redirection**

En este ejercicio te encargarás de crear la redirección hacia el _detail_ de un personaje. Para esto:

1. Dirígete al componente **`Card`** e importa la etiqueta **Link**.
2. Envuelve el nombre del personaje en esta etiqueta, y que redirija a la ruta **`/detail/:id`**.

> [**NOTA**]: debes pasarle como parámetro el **id** del personaje. personaje para usarlo en el Link.

```js
// Card.js
...
<Link to={`/detail/${id}`} >
  <h3 className="card-name">{name}</h3>
</Link>
...
```

En este momento, cuando hacemos click sobre el nombre de un personaje nos debe redirección a la ruta especificada.

<img src="./img/rutaDetail.gif" alt="" />

<br />

---

### **👩‍💻 EJERCICIO 5 | Detail**

¡Genial! Las funcionalidades ya están. Ahora es momento de contruir nuestro componente **`Detail`**. Para esto dirígete a este componente y:

1. Importa axios.
2. Importa el hook **useParams** y obten el **id** del personaje.
3. Importa el hook **useState** y crea un estado local con el nombre "**_character_**" que se inicialice como un objeto vacío.
4. En este paso importaremos el hook **useEffect** de **`react`**. Una vez importado, copia el siguiente código y pégalo en el cuerpo del componente.

```js
useEffect(() => {
   axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacter(data);
      } else {
         window.alert('No hay personajes con ese ID');
      }
   });
   return setCharacter({});
}, [id]);
```

> [**NOTA**]: este código es el que buscará al personaje de la API cada vez que el componente se monte. Y luego, cada vez que se desmonte, borrará su información.

<br />

---

### **👩‍💻 EJERCICIO 6 | Detail rendering**

Ahora en el estado local **character** ya tenemos disponible toda la información que necesitamos de nuestro personaje. Por lo que:

1. Renderiza **condicionalmente** cada una de estas propiedades.

-  **name**
-  **status**
-  **species**
-  **gender**
-  **origin** (ten en cuenta que el nombre se guarda dentro de otra propiedad "_name_")
-  **image**

Debería quedarte algo como esto:

<img src="./img/final_detail.png" width='800px'/>

<br />

> [**NOTA**]: como la información del personaje de obtiene a partir de una petición asincrónica a la API de Rick & Morty, puede que la información aún no esté disponible cuando la quieras renderizar. ¡Aquí es donde debes aplicar renderizado condicional! Te dejamos la [**documentación**](https://reactjs.org/docs/conditional-rendering.html#:~:text=Conditional%20rendering%20in%20React%20works,the%20UI%20to%20match%20them.&text=This%20example%20renders%20a%20different,the%20value%20of%20isLoggedIn%20prop.) como ejemplo.

<br />

---

### **📌 EXTRA CREDIT**

Ahora te desafiamos a que crees un nuevo componente llamado **Error**. A este componente le podrás dar los estilos que quieras, pero la idea es que se muestre un mensaje de error 404. ¡Puedes inspirarte en este [**ejemplo**](https://github.com/errroorrxd)!

El desafío es el siguiente: haz que este componente se muestre cada vez que el usuario ingrese a cualquier otra ruta que no exista. Es decir que no la hayas especificado en esta homework. Por ejemplo, si creaste una ruta "`/home`" y "`/about`", y el usuario en el navegador escribe y "`/henry`", debería mostrar el componente Error 404.


# //////////////////////////////////////////////////////////////////////////////////////////////////////////////
# //////////////////////////////////////////////////////////////////////////////////////////////////////////////
# //////////////////////////////////////////////////////////////////////////////////////////////////////////////


# **💪 HW10 | React Forms - Integration**

## **🕒 DURACIÓN ESTIMADA**

3 horas

<br />

---

<div align="center">

## **💻 RICK AND MORTY APP 💻**

</div>

## **📝 INTRO**

En esta homework crearemos un sistema de login para nuestra aplicación. De esta forma podremos practicar formularios y, además, cada vez que ingresemos a la App tendremos que tener un email y una contraseña.

<br />

---

## **📋 INSTRUCCIONES**

### **👩‍💻 EJERCICIO 1 | Form**

Ahora crearemos el formulario que nos permitirá logearnos en un futuro.

1. Crea un componente con el nombre **`Form`**.
2. Dentro de este componente se deben renderizar los siguientes elementos:

   -  Una etiqueta **`form`** que envolverá a todo el componente.
   -  Una etiqueta **`label`** junto con un **`input`** para el email.
   -  Una etiqueta **`label`** junto con un **`input`** para la password.
   -  Un **`button`** con el texto "**_Submit_**".

¡Dale algo de estilos al componente! Puede quedar algo como esto...

<img src="./img/form.png" alt="" />

<br />

---

### **👩‍💻 EJERCICIO 2 | Routing**

Ahora le diremos a nuestro formulario dónde debe renderizarse. Para esto:

1. Crea una ruta en el archivo **`App.js`** y crea una ruta para que el formulario se renderice en **`/`**.
2. Si obervas la imagen del ejercicio anterior, la barra de navegación aún se muestra en el **login**. Deberás crear un renderizado condicional, de modo tal que la **`Nav`** se muestre siempre y cuando no estemos en la ruta **`/`**.

> **PISTA:** investiga sobre el hook **`useLocation`** de react-router-dom, y piensa cómo hacer el renderizado condicional.

<br />

---

### **👩‍💻 EJERCICIO 3 | Form control**

En este ejercicio controlaremos y gestionaremos la información que ingrese el usuario en nuestro formulario. Para esto:

1. Crea un estado local llamado **userData**. Este debe inicializarse como un objeto con las propiedades **email** y **password** iguales a un string vacío.
2. Conecta tu estado local con los inputs correspondientes utilizando la propiedad **`value`**.
3. Crea una función llamada **handleChange** que nos permita reflejar el texto ingresado de los inputs en nuestro estado local.

<br />

---

### **👩‍💻 EJERCICIO 4 | Validaciones**

1. En tu componente **`Form`** crea un nuevo estado local llamado "**errors**" que se inicialice como un objeto vacío. Este es el estado que utilizarás para encontrar errores en el formulario.

2. Ahora crea un archivo con el nombre "**validation.js**". Aquí dentro deberás crear una función que valide los siguientes puntos:

**EMAIL**

-  el nombre de usuario tiene que ser un email (¡Explora validaciónes REGEX en internet!).
-  el nombre de usuario no puede estar vacío.
-  el nombre de usuario no puede tener más de 35 caracteres.

**PASSWORD**

-  la contraseña tiene que tener al menos un número.
-  la contraseña tiene que tener una longitud entre 6 y 10 caracteres.

¡No te olvides de renderizar y darle estilos a tus errores! Te dejamos un ejemplo de cómo puede quedar.

<img src="./img/validations.png" alt="" >

<br />

---

### **👩‍💻 EJERCICIO 5 | Seguridad**

Ahora simularemos una base de datos donde esté guardado un email y password. De esta forma, solo si la información de usuario coincide podrá ingresar a la aplicación. Para esto:

1. En el archivo **`App.js`** crea lo siguiente:

   -  Un estado local llamado "**access**" que se inicialice en **`false`**.
   -  Una variable llamada "**EMAIL**", y que sea igual a tu email.
   -  Una variable "**PASSWORD**", y que sea igual a una contraseña.

</br >

2. Crea una función llamada "**login**" que reciba por parámetro "_userData_". Esta función tiene que preguntar si el email y password que declaraste más arriba son iguales a los que les está llegando por parámetro. En caso afirmativo, el estado local access ahora será **`true`**. Importa el hook "**useNavigate**" de _react-router-dom_ y haremos que nos redirija a **`/home`** si la información es correcta.

```jsx
const navigate = useNavigate();
const [access, setAccess] = useState(false);
const EMAIL = 'ejemplo@gmail.com';
const PASSWORD = 'unaPassword';

function login(userData) {
   if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
   }
}
```

3. Por último, lleva el siguiente código a tu componente (no te olvides de importar el **`useEffect`**).

```javascript
// App.js
useEffect(() => {
   !access && navigate('/');
}, [access]);
```

<br />

---

### **👩‍💻 EJERCICIO 6 | Login**

¡Ahora le daremos la funcionalidad de cambiar los permisos a nuestro login!

1. Dirígete al archivo **`App.js`** y pásale la función **login** que creaste en el ejercicio anterior al componente **`Form`** mediante props.

2. En el componente **`Form`** crea una función "**handleSubmit**". Esta función recibe un evento por parámetro. Deberás ejecutas la función **`e.preventDefault()`**. Luego ejecuta la función "**login**" recibida por props. ¡No te olvides de pasarle por parámetro tu estado local _`userData`_!

3. La función **handleSubmit** debe ejecutarse cuando se hace click en el botón **submit**.

¡Listo! Ya tienes un login funcional 😀🥳🤓

Pruebalo ingresando la información que declaraste previamente.

<br />

---

### **📌 EJERCICIO EXTRA**

Te desafiamos a que crees un botón "**Log out**" en tu componente **`Nav`**. Si lo presionas debe quitar los permisos de acceso y redirigirte automáticamente a tu componente **`Form`**.

> [**NOTA**]: lo puedes hacer creando una función **logout** en tu archivo App.js.


# //////////////////////////////////////////////////////////////////////////////////////////////////////////////
# //////////////////////////////////////////////////////////////////////////////////////////////////////////////
# //////////////////////////////////////////////////////////////////////////////////////////////////////////////