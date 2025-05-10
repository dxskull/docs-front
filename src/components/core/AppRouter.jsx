import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import LandingPage from "../../pages/LandingPage";
import DocumentsPage from "../../pages/DocumentsPage";
import DocumentFormPage from "../../pages/DocumentFormPage";
import ProfilePage from "../../pages/ProfilePage";
import AdminPage from "../../pages/AdminPage";
import LoginPage from "../../pages/LoginPage";
import RegisterPage from "../../pages/RegisterPage";
import { useSelector } from "react-redux";
import { selectorIsAdmin, selectorIsAuth } from "../../redux/slices/authSlice";

const AppRouter = () => {
  const isAuth = useSelector(selectorIsAuth);
  const isAdmin = useSelector(selectorIsAdmin);

  return (
    <Routes>
      <Route path={ROUTES.LANDING_PAGE} element={<LandingPage />} />

      {isAuth ? (
        <>
          <Route path={ROUTES.DOCUMENTS_PAGE} element={<DocumentsPage />} />
          <Route
            path={ROUTES.DOCUMENT_FORM_PAGE}
            element={<DocumentFormPage />}
          />
          <Route path={ROUTES.PROFILE_PAGE} element={<ProfilePage />} />
          {isAdmin && (
            <Route path={ROUTES.ADMIN_PAGE} element={<AdminPage />} />
          )}
        </>
      ) : (
        <>
          <Route path={ROUTES.LOGIN_PAGE} element={<LoginPage />} />
          {/* <Route path={ROUTES.REGISTER_PAGE} element={<RegisterPage />} /> */}
        </>
      )}

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRouter;
