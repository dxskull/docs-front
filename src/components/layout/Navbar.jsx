import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchLogout,
  selectorIsAdmin,
  selectorIsAuth,
} from "../../redux/slices/authSlice";

const Navbar = () => {
  const isAuth = useSelector(selectorIsAuth);
  const isAdmin = useSelector(selectorIsAdmin);

  const dispatch = useDispatch();

  async function onLogout() {
    if (window.confirm("Вы действительно хотите выйти?")) {
      await dispatch(fetchLogout());
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
    }
  }

  return (
    <nav className="nav">
      <div className="nav__items">
        <div className="nav__links">
          <Link to={ROUTES.LANDING_PAGE} className="nav__logo">
            Docs
          </Link>
          {isAuth && (
            <>
              <Link to={ROUTES.DOCUMENTS_PAGE} className="nav__item">
                Документы
              </Link>
              {isAdmin && (
                <Link to={ROUTES.ADMIN_PAGE} className="nav__item">
                  Панель администратора
                </Link>
              )}
            </>
          )}
        </div>

        <div className="nav__auth">
          {isAuth ? (
            <>
              <Link to={ROUTES.PROFILE_PAGE} className="nav__item">
                Профиль
              </Link>
              <a className="nav__item" onClick={onLogout}>
                Выйти
              </a>
            </>
          ) : (
            <Link to={ROUTES.LOGIN_PAGE} className="nav__item">
              Войти
            </Link>
          )}

          {/* <Link to={ROUTES.REGISTER_PAGE} className="nav__item">
            Регистрация
          </Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
