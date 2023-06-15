import { useContext } from "react";
import axiosClient from "../axiosClient.js";
import useSessionCookie from "../createCookie.js";
import { UserContext } from "../Context/UserContext.jsx";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { toggleUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const [email, password] = e.target;
    const data = { user: { email: email.value, password: password.value } };
    createUser(data);
  };

  const createUser = async (data) => {
    const response = await axiosClient.post("/login", data);
    useSessionCookie(response);
    toggleUser();
    navigate("/");
  };

  return (
    <main>
      <div className="my-16 container grid gap-4 grid-cols-2 shadow-xl">
        <div className="hero-login"></div>

        <div className="w-max ml-10">
          <h1 className="my-10 text-4xl font-extrabold">Se connecter</h1>
          <h6 className=" text-2xl font-medium">
            Connectez-vous avec votre email
          </h6>
          <p>
            Pas encore de compte ?
            <Link
              to="/signup"
              className="ml-4 text-blue-600"
              style={{ color: "blue", fontWeight: "500" }}
            >
              Créer un compte
            </Link>
          </p>
          <form
            className="form gap-10 mt-5 text-lightGrey"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="input__wrapper">
              <label name="email" className="label">
                E-mail
              </label>
              <input className="input" type="email" name="email" />
            </div>
            <div className="input__wrapper">
              <label name="password" className="label">
                Mot de passe
              </label>
              <input className="input" type="password" name="password" />
            </div>

            <div className="flex justify-end">
              <input
                type="submit"
                className="btn bg-black text-white w-1/2 cursor-pointer"
                value={"Se connecter"}
              />
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
