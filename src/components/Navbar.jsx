import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  return (
    <nav className=" sticky top-0 bg-white w-full">
      <div className="nav__wrapper flex justify-between items-center h-[85px]">
        {user ? (
          <>
            <Link to="/">
              <img
                src="./images/estate-logo.svg "
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
                src="./images/estate-logo.svg "
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
      </div>
    </nav>
  );
};

export default Navbar;
