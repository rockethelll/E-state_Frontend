import { Link } from "react-router-dom";
import Button from "./Button";

const Navbar = ({ user }) => {
  function test() {
    console.log("caca");
  }

  return (
    <nav className="flex justify-between items-center h-[85px]">
      {user ? (
        <>
          <Link to="/">
            <img
              src="@/../public/images/estate-logo.svg "
              width="85px"
              height="auto"
              alt=""
            />
          </Link>
          <div className="flex space-x-[2em] nav-link">
            <Link to="/">Publier une annonce</Link>
            <Link to="/">Parcourir les annonces</Link>
            <Link to="/">Profil</Link>
          </div>
        </>
      ) : (
        <>
          <Link to="/">
            <img
              src="@/../public/images/estate-logo.svg "
              width="85px"
              height="auto"
              alt=""
            />
          </Link>
          <Link to="/signup" className="btn">
            Créer un compte
          </Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
