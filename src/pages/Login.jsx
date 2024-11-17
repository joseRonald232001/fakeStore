import React from "react";
import { useForm } from "react-hook-form";
import { AuthUser } from "../utils/api/auth";
import { useNavigate } from "react-router-dom";
import { useUI } from "../utils/providers/UiContext";
import loginFigure from "../assets/vectores/loginFigure.svg";

function Login() {
  const { setIsLoading, setNotification } = useUI();
  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const singUp = async (data) => {
    setIsLoading((prevState) => ({
      ...prevState,
      pageLoader: true,
    }));
    try {
      const res = await AuthUser(data);
      if (res) {
        localStorage.setItem("userfakeStore", res);
        navigate("/me");
      }
    } catch (error) {
      setNotification(error.message);
      
    } finally {
      setIsLoading((prevState) => ({
        ...prevState,
        pageLoader: false,
      }));
    }
  };

  return (
    <>
      <section className="login_section">
        <div className="login_content">
          <div>
            <form className="login_form" onSubmit={handleSubmit(singUp)}>
              <p>
                <strong>Test user:</strong> mor_2314
              </p>
              <p>
                <strong>Password:</strong> 83r5^_
              </p>
              <label> Welcome back !!!</label>
              <h2>Sing in</h2>
              <fieldset>
                <label htmlFor="">User Name</label>
                <input
                  type="text"
                  placeholder="name"
                  {...register("username")}
                />
              </fieldset>

              <fieldset>
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  placeholder="password"
                  {...register("password")}
                />
              </fieldset>

              <button>Enviar</button>
            </form>
          </div>
          <figure className="login_figure">
            <img src={loginFigure} alt="login shop" />
          </figure>
        </div>
      </section>
    </>
  );
}

export default Login;
