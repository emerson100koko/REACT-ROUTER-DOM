import { NavLink } from "react-router-dom";
import "./styles.css";

export default function NavCard() {
  return (
    <main>
      <div className="navcard container mb20">
        <ul className="listing-products">
          <NavLink
            to="computers"
            className={({ isActive }) =>
              isActive ? "menu-item menu-active" : "menu-item"
            }
          >
            <li>Computadores</li>
          </NavLink>
          <NavLink
            to="eletronics"
            className={({ isActive }) =>
              isActive ? "menu-item menu-active" : "menu-item"
            }
          >
            <li>Eletrônicos</li>
          </NavLink>
          <NavLink
            to="books"
            className={({ isActive }) =>
              isActive ? "menu-item menu-active" : "menu-item"
            }
          >
            <li>Livros</li>
          </NavLink>
        </ul>
      </div>
    </main>
  );
}