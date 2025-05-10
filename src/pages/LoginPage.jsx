import React from "react";
import LoginForm from "../components/Login/LoginForm";

const LoginPage = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1 className="title">Войти</h1>
        <LoginForm/>
      </div>
    </div>
  );
};

export default LoginPage;
