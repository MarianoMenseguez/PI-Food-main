import React from "react";
import { Link }  from "react-router-dom";
import './Landing.css';

const Landing = () => {
    return(
        <div className="divContainer-landing">
            <div className="letters">
                <h1>Sabemos que te gusta !</h1>
            </div>
            <div id="button">
                <Link to='/home'>
                    <button>Echa un Vistazo</button>
                </Link>
            </div>
        </div>
    )
}

export default Landing;