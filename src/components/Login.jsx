import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { useState } from "react";

const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
export default function Login({login}) {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  function validate(inputs) {
    const errors = {};
    if (!inputs.email) {
      errors.email = "Debe haber un email";
    } else if (!inputs.password) {
      errors.password = "Debe haber un password";
    } else if (!regexEmail.test(inputs.email)) {
      errors.email = "Debe haber un email valido";
    } else if (!regexPassword.test(inputs.password)) {
      errors.password = "Debe haber un password valido";
    }
    return errors;
  }

  function handleChang(event) {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validate({
        ...inputs,
        [event.target.name]: event.target.value,
      })
    );
  }
  function handleSubmit(event) {
    event.prevent.defautl();
    const aux = Object.keys(errors);
    if (aux.length === 0) {
      setInputs({
        email: "",
        password: "",
      });
      setErrors({
        email: "",
        password: "",
      });
      return alert("OK");
    }
    login(inputs)
    return alert("ERROR");
  }

  return (
    <div className="login">
      <form onSubmit={handleSubmit} className="form">
        <label>Email: </label>
        <input
          name="email"
          value={inputs.email}
          onChange={handleChang}
          placeholder="Escribe tu email"
        ></input>
        <p className="danger">{errors.email}</p>
        <label>Password: </label>
        <input
          name="password"
          value={inputs.password}
          onChange={handleChang}
          placeholder="Escribe tu constraseña "
        ></input>
        <p className="danger">{errors.password}</p>
        {Object.keys(errors).length === 0 ? (
          <Link to="/home">
            <button type="submit">Ingresar</button>
          </Link>
        ) : null}
      </form>
    </div>
  );
}
