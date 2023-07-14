import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import { useState } from "react";

const NavBar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div className={style.navbar}>
      <div className={style.nav_logo}>
        POKEMÓN
      </div>
      <div className={`${style.nav_items} ${isNavExpanded && style.open} `}>
        <Link to={"/home"}>Home</Link>
        <Link to={"/form"}>Create Pokemón</Link>
        <Link to={"/about"}>About</Link>
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
