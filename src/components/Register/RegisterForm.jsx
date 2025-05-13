import classNames from "classnames";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../utils/axios";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");
  const navigate = useNavigate();

  async function registerUser(registerData) {
    try {
      const { data } = await axiosInstance.post("/auth/register", registerData);
      console.log(data);
    } catch (error) {
      console.log("Axios error: ", error);
    }
  }

  async function onSubmitForm(data) {
    try {
      delete data.confirmPass;
      await registerUser(data);
      // navigate(ROUTES.DOCUMENTS_PAGE);
    } catch (error) {
      console.log("Error: ", error);
    }
  }

  return (
    <form className="auth__form" onSubmit={handleSubmit(onSubmitForm)}>
      <div className="input-box">
        <input
          type="text"
          placeholder="Имя"
          {...register("name", {
            required: "Заполните имя",
          })}
          className={classNames("input", {
            "input-error": errors.name,
          })}
        />
        {errors.name && (
          <span className="error-message">{errors.name.message}</span>
        )}
      </div>

      <div className="input-box">
        <input
          type="text"
          placeholder="Фамилия"
          {...register("surname", {
            required: "Заполните фамилию",
          })}
          className={classNames("input", {
            "input-error": errors.surname,
          })}
        />
        {errors.surname && (
          <span className="error-message">{errors.surname.message}</span>
        )}
      </div>

      <div className="input-box input-box-2">
        <input
          type="email"
          placeholder="Почта"
          {...register("email", {
            required: "Заполните почту",
          })}
          className={classNames("input", {
            "input-error": errors.email,
          })}
        />
        {errors.email && (
          <span className="error-message">{errors.email.message}</span>
        )}
      </div>

      <div className="input-box">
        <input
          type="password"
          placeholder="Пароль"
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
        />
        {errors.password && (
          <span className="error-message">{errors.password.message}</span>
        )}
      </div>

      <div className="input-box">
        <input
          type="password"
          placeholder="Подтвердите пароль"
          {...register("confirmPass", {
            required: "Подтвердите пароль",
            validate: (value) => value === password || "Пароли не совпадают",
          })}
          className={classNames("input", {
            "input-error": errors.confirmPass,
          })}
        />
        {errors.confirmPass && (
          <span className="error-message">{errors.confirmPass.message}</span>
        )}
      </div>
      <button className="btn btn-2">Зарегистрироваться</button>
    </form>
  );
};

export default RegisterForm;
