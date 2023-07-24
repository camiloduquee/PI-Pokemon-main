import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import { useState } from "react";
import logoPokemon from "../../assets/img/pngwing.com.png";
const NavBar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div className={style.navbar}>
      
        <img src={logoPokemon} className={style.logo}/>
      
      <div className={`${style.nav_items} ${isNavExpanded && style.open} `}>
        <Link to={"/home"}>Home</Link>
        <Link to={"/form"}>Create Pokemón</Link>
        {/* <Link to={"/about"}>Sobre mi </Link> */}
      </div>
      <div className={`${style.nav_toggle} ${isNavExpanded && style.open}`} onClick={() => setIsNavExpanded(!isNavExpanded)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};
export default NavBar;
