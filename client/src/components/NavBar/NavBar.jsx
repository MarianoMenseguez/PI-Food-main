import { Link } from "react-router-dom";
import style from '../NavBar/NavBar.module.css';

const NavBar = () => {
    return(
        <div className={style.mainContainer}> 
            <Link to='/home'>
                <button className={style.home}>Home</button>
            </Link>
            <Link to='/form'>
                <button className={style.newRecipe}>New Recipe</button>
            </Link>
            <Link to='/formdiet'>
                <button className={style.newRecipe}>New Diet</button>
            </Link>
        </div>
    )
}

export default NavBar;
