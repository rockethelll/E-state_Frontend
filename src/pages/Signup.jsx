import axiosClient from "../axiosClient.js";
import useSessionCookie from "../createCookie.js";
import { UserContext } from "../Context/UserConctex.jsx";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const { toggleUser } = useContext(UserContext)

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const [email, password] = e.target;
    const data = { user: { email: email.value, password: password.value } };
    createUser(data)
  }

  const createUser = async (data) => {
    const response = await axiosClient.post("/signup", data);
    useSessionCookie(response)
    toggleUser()
  }

  return (
    <main>
      <div className="my-16 container grid gap-4 grid-cols-2 shadow-xl">

        <div className="hero-login"></div>

        <div className="w-max ml-10">
          <h1 className="my-10 text-4xl font-extrabold">Créer un compte</h1>
          <form className='flex flex-col flex-1 justify-between w-full' onSubmit={(e) => handleSubmit(e)} >
            <div className="mt-12 relative flex flex-col border border-lightGrey">
              <label name='email' className="absolute top-[-15px] left-[15px] bg-white text-lightGrey px-3" >E-mail</label>
              <input
                className="bg-white h-[30px] pl-4"
                type='email'
                name='email'
              />
            </div>
            <div className="mt-12 relative flex flex-col border border-lightGrey">
              <label name='password' className="absolute top-[-15px] left-[15px] bg-white text-lightGrey px-3">Mot de passe</label>
              <input
                className="bg-white h-[30px] pl-4"
                type='password'
                name='password'
              />
            </div>

            <div className='flex justify-end'>
              <input type="submit" className="mt-8 btn bg-black text-white w-1/2 cursor-pointer" value={'Créer'} />
            </div>
          </form>
        </div>

      </div>

    </main>
  );
};

export default Signup;