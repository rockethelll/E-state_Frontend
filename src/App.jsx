import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Show from "./pages/Show.jsx";
import New from "./pages/New.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/show/:id" element={<Show/>} />
        <Route path="/new" element={<New/>} />
      </Routes>
    </>
  );
};

export default App;
