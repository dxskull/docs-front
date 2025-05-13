import classNames from "classnames";
import React, { useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { useForm } from "react-hook-form";
import { axiosInstance } from "../../utils/axios";

const AdminForm = ({ addUser, setPopupVisible }) => {
  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  async function addUserFetch(registerData) {
    try {
      const { data } = await axiosInstance.post("/users/", registerData);
      // добавить уведомление о том, что юзер добавлен
    } catch (error) {
      console.log(error);
    }
  }

  async function onSubmitForm(data) {
    try {
      delete data.confirmPass;
      await addUserFetch(data);
      addUser(data);
    } catch (error) {
      console.log(error);
    }
  }

  // Если пароль изменился, то подтвреждение пароля срабатывает сразу, а не после сабмита
  useEffect(() => {
    const confirmPassValue = watch("confirmPass");
    // если поле не пустое, то валидируй
    if (confirmPassValue) {
      trigger("confirmPass");
    }
  }, [password, trigger, watch]);

  return (
    <div className="admin-form-container">
      <h2 className="title admin-form__title">Добавить пользователя</h2>
      <form className="admin-form" onSubmit={handleSubmit(onSubmitForm)}>
        <div className="input-box">
          <label htmlFor="name" className="label">
            Имя
          </label>
          <input
            type="text"
            {...register("name", {
              required: "Заполните имя",
            })}
            className={classNames("input", {
              "input-error": errors.name,
            })}
            id="name"
          />
          {errors.name && (
            <span className="error-message">{errors.name.message}</span>
          )}
        </div>
        <div className="input-box">
          <label htmlFor="surname" className="label">
            Фамилия
          </label>
          <input
            type="text"
            {...register("surname", {
              required: "Заполните фамилию",
            })}
            className={classNames("input", {
              "input-error": errors.surname,
            })}
            id="surname"
          />
          {errors.surname && (
            <span className="error-message">{errors.surname.message}</span>
          )}
        </div>
        <div className="input-box-2">
          <label htmlFor="email" className="label">
            Эл. почта
          </label>
          <input
            type="email"
            {...register("email", {
              required: "Заполните эл. почту",
            })}
            className={classNames("input", {
              "input-error": errors.email,
            })}
            id="email"
          />
          {errors.email && (
            <span className="error-message">{errors.email.message}</span>
          )}
        </div>

        <div className="input-box-2">
          <label className="label">Роль</label>
          <div
            className={classNames("radio-box", {
              "radio-box-error": errors.role,
            })}
          >
            <input
              id="worker"
              type="radio"
              value="worker"
              {...register("role", {
                required: "Выберите роль",
              })}
            />
            <label htmlFor="worker" className="radio-label">
              worker
            </label>

            <input
              id="admin"
              type="radio"
              value="admin"
              {...register("role", {
                required: "Выберите роль",
              })}
            />
            <label htmlFor="admin" className="radio-label">
              admin
            </label>
          </div>
          {errors.role && (
            <span className="error-message">{errors.role.message}</span>
          )}
        </div>

        <div className="input-box">
          <label htmlFor="password" className="label">
            Пароль
          </label>
          <input
            type="password"
            {...register("password", {
              required: "Заполните пароль",
              minLength: {
                value: 8,
                message: "Минимум 8 символов",
              },
            })}
            className={classNames("input", {
              "input-error": errors.password,
            })}
            id="password"
          />
          {errors.password && (
            <span className="error-message">{errors.password.message}</span>
          )}
        </div>

        <div className="input-box">
          <label htmlFor="confirm-password" className="label">
            Подтвердите пароль
          </label>
          <input
            type="password"
            {...register("confirmPass", {
              required: "Подтвердите пароль",
              validate: (value) => value === password || "Пароли не совпадают",
            })}
            className={classNames("input", {
              "input-error": errors.confirmPass,
            })}
            id="confirm-password"
          />
          {errors.confirmPass && (
            <span className="error-message">{errors.confirmPass.message}</span>
          )}
        </div>

        <div className="input-box-2">
          <button className="btn">Зарегестрировать пользователя</button>
        </div>
      </form>
      <IoMdClose
        className="close-icon"
        onClick={() => {
          setPopupVisible(false);
        }}
      />
    </div>
  );
};

export default AdminForm;
