import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="content">
        <div className="header__menu">
          <div className="logo"></div>
          <nav className="menu">
            <ul className="menu__list">
              <li>
                <NavLink className="menu__item" to="/sellers">
                  Продавцы
                </NavLink>
              </li>
              <li>
                <NavLink className="menu__item  chevron active" to="/">
                  Мои кампании
                </NavLink>
              </li>
              <li>
                <NavLink className="menu__item" to="/current-rates">
                  Актуальные ставки
                </NavLink>
              </li>
              <li>
                <NavLink className="menu__item chevron" to="/possibilities">
                  Возможности
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <ul className="header__login">
          <li>Поддержка</li>
          <li>Тарифы</li>
          <li>
            <NavLink to="sign-up">
              <div className="bell"></div>
            </NavLink>
          </li>
          <li>
            <div className="log-in chevron"></div>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
