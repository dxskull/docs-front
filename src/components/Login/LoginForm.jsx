import classNames from "classnames";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchAuthUserData, fetchLogin } from "../../redux/slices/authSlice";

import { ROUTES } from "../../utils/routes";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "JonhDoe@gmail.com",
      password: "StrongP@ssw0rd!",
    },
  });

  async function onSubmitForm(formValues) {
    try {
      const data = await dispatch(fetchLogin(formValues));

      if ("access_token" && "refresh_token" in data.payload) {
        localStorage.setItem("access_token", data.payload.access_token);
        localStorage.setItem("refresh_token", data.payload.refresh_token);
        const authUserData = await dispatch(fetchAuthUserData());

        if ("email" in authUserData.payload) {
          navigate(ROUTES.DOCUMENTS_PAGE);
        }
      }
    } catch (error) {
      console.log("Error: ", error);
      alert("Не удалось авторизоваться");
    }
  }

  return (
    <form className="auth__form" onSubmit={handleSubmit(onSubmitForm)}>
      <div className="input-box input-box-2">
        <input
          type="email"
          placeholder="Почта"
          {...register("email", {
            required: "Введите почту",
          })}
          className={classNames("input", {
            "input-error": errors.email,
          })}
        />
        {errors.email && (
          <span className="error-message">{errors.email.message}</span>
        )}
      </div>
      <div className="input-box input-box-2">
        <input
          type="password"
          placeholder="Пароль"
          {...register("password", {
            required: "Введите пароль",
          })}
          className={classNames("input", {
            "input-error": errors.password,
          })}
        />
        {errors.password && (
          <span className="error-message">{errors.password.message}</span>
        )}
      </div>

      <button className="btn btn-2">Войти</button>
    </form>
  );
};

export default LoginForm;
