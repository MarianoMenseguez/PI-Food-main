import { useState, useEffect } from "react";
import "./App.css";
import Cards from "./components/Cards.jsx";
import NavBar from "./components/NavBar";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Detail from "./components/Detail";
import About from "./components/About";
import Login from "./components/Login";
import { useLocation, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = "eje@gmail.com";
  const PASSWORD = "@Model101";

  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  function login(inputs) {
    if (inputs.password === PASSWORD && inputs.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  }
  function logout() {
   
     setAccess(false);
     navigate("/");
   }
 


  useEffect(()=>{
   !access && navigate('/');
  },[access])
  function onSearch(id) {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          let exist = characters.find((ch) => ch.id === data.id);
          if (exist) {
            alert("ya existe");
          } else {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function onClose(id) {
    setCharacters((oldChars) => {
      return oldChars.filter((ch) => ch.id !== id);
    });
  }
  return (
    <div className="App">
      {location.pathname === "/" ? null : <NavBar logout={logout} onSearch={onSearch}></NavBar>}

      <Routes>
        <Route path="/" element={<Login login={login} />}></Route>
        <Route
          path="/home"
          element={<Cards onClose={onClose} characters={characters} />}
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
