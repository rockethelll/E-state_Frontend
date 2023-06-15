import { useContext } from "react";
import axiosClient from "../axiosClient.js";
import useSessionCookie from "../createCookie.js";
import { UserContext } from "../Context/UserConctex.jsx";
import { Link } from "react-router-dom";

const Login = () => {
  const { toggleUser } = useContext(UserContext)

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const [email, password] = e.target;
    const data = { user: { email: email.value, password: password.value } };
    createUser(data)
  }

  const createUser = async (data) => {
    const response = await axiosClient.post("/login", data);
    useSessionCookie(response)
    toggleUser()
  }

  return (
    <main className="w-1/2">
      <div className=" my-10 container grid gap-4 grid-cols-2 grid-rows-1 shadow-xl">

        <div className="hero"></div>

        <div className="form w-max">
          <h1>Se connecter</h1>
          <h6>Connectez-vous avec votre email</h6>
          <p>Pas encore de compte ?
          <Link to="/signup" className="btn">
                Créer un compte
              </Link>
          </p>
          <form className='flex flex-col justify-center items-center' onSubmit={(e) => handleSubmit(e)} >
            <label name='email'>Email</label>
            <input
              type='email'
              name='email'
            />
            <label name='password'>Mot de passe</label>
            <input
              type='password'
              name='password'
            />
            <input
              type="submit"
              style={
                {
                  color: 'white',
                  background: 'black',
                  padding: 15,
                  cursor: 'pointer'
                }
              }
            />
          </form>
        </div>

      </div>

    </main>
  );
};

export default Login;