import { Link, useLocation } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/images/logo.png";

function Header() {
  const location = useLocation();
  const atHome = location.pathname === "/";

  return (
    <header>
      <Link to="/">
        <img src={logo} alt="logo de kasa" />
      </Link>
      <nav>
        <ul>
          <li className={atHome ?  "menu_select" :''}>
            <Link to="/">Accueil</Link>
          </li>
          <li className={!atHome ? "menu_select":''}>
            <Link to="/a propos">A Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
