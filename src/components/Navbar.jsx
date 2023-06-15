import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import axiosClient from "../axiosClient.js";
import { useContext } from "react";
import { UserContext } from "../Context/UserConctex.jsx";


const Navbar = () => {
  const { toggleUser, isLogin } = useContext(UserContext)
  
  const getAuthToken = () => {
    const bearer = Cookies.get("token");
    return bearer ? `Bearer ${bearer}` : null;
  }
  
  const disconnect = async () => {
    if (!getAuthToken()) return;
  
    await axiosClient.delete(`/logout`, {
      headers: {
        Authorization: getAuthToken()
      }
    }).then(Cookies.remove('token'))
    .then(toggleUser())
  }

  return (
    <nav className=" sticky z-50 top-0 bg-white w-full drop-shadow">
      <div className="nav__wrapper flex justify-between items-center h-[85px]">
        <>
          <p>{isLogin ? 'User is login' : 'Not login'}</p>
        <Link to="/">
          <img
            src="../images/estate-logo.svg "
            width="85px"
            height="auto"
            alt=""
          />
        </Link>
        {isLogin ? (
          <div className="flex space-x-[2em] nav-link">
            <Link to="/new">Publier une annonce</Link>
            <Link to="/">Parcourir les annonces</Link>
            <Link to="/">Profil</Link>
              <button
                onClick={disconnect}
                className="btn bg-black text-white  cursor-pointer"
              
              >Se déconnecter</button>
          </div>
          ) : (
            <>
              <Link to="/login" className="btn bg-black text-white">
                Se connecter
              </Link>
            </>
          )}
          </>
      </div>
    </nav>
  );
};

export default Navbar;
