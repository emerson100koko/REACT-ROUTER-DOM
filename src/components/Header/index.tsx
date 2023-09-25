import "./styles.css";
import homeImg from "../../assets/home.svg";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="navbar container">
        <nav>
          <ul className="listing-nav">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? "menu-item menu-active" : "menu-item"
              }
            >
              <li>Início</li>
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? "menu-item menu-active" : "menu-item"
              }
            >
              <li>Produtos</li>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "menu-item menu-active" : "menu-item"
              }
            >
              <li>Sobre nós</li>
            </NavLink>
          </ul>
        </nav>
        <div>
          <Link to={"/"}>
            <img src={homeImg} alt="home" />
          </Link>
        </div>
      </div>
    </header>
  );
}