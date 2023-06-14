import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import axiosClient from "../axiosClient.js";

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
}

const Navbar = ({ user }) => {
  user = true;
  return (
    <nav className=" sticky z-50 top-0 bg-white w-full drop-shadow">
      <div className="nav__wrapper flex justify-between items-center h-[85px]">
        {user ? (
          <>
            <Link to="/">
              <img
                src="../images/estate-logo.svg "
                width="85px"
                height="auto"
                alt=""
              />
            </Link>
            <div className="flex space-x-[2em] nav-link">
              <Link to="/new">Publier une annonce</Link>
              <Link to="/">Parcourir les annonces</Link>
              <Link to="/">Profil</Link>
            </div>
          </>
        ) : (
          <>
            <Link to="/">
              <img
                src="../images/estate-logo.svg "
                width="85px"
                height="auto"
                alt=""
              />
            </Link>
            <Link to="/signup" className="btn">
              Créer un compte
            </Link>
            <Link to="/login" className="btn">
              Se connecter
            </Link>
            <button onClick={disconnect}>Se déconnecter</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
