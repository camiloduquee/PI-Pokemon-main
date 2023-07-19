import style from "./Footer.module.css";
import linkedin from "../../assets/svg/linkedin.svg";
import gitHub from "../../assets/svg/gitHub.svg";
import { Link } from "react-router-dom";
import {l_linkedin, l_gitHub} from "../../helpers/variables";

const Footer = () => {
  return (
    <div className={style.container}>
      <section>
        <Link to={l_linkedin}>
          <img src={linkedin} alt="linkedin" className={style.icon}></img>
        </Link>
        <Link to={l_gitHub}>
        <img src={gitHub} alt="gitHub" className={style.icon}></img>
        </Link>
        
      </section>
      <p>© 2023 Copyright: Héctor Gómez</p>
    </div>
  );
};
export default Footer;
