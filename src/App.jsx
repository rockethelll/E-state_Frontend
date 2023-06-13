import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import { useState } from "react";

const App = () => {
  let [logged, setLogged] = useState(false);
  const handleLogged = () => {
    setLogged(!logged);
  };
  console.log(logged)
  return (
    <>
      <Navbar user={logged} />
      <button onClick={handleLogged}>Log</button>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
