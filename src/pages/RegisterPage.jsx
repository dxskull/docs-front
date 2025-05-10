import React from "react";
import RegisterForm from "../components/Register/RegisterForm";
const RegisterPage = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1 className="title">Регистрация</h1>
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
