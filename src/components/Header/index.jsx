import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/images/logo.png";

function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="logo de kasa" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/a propos">A Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
