import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from './pages/Home.jsx'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } />
      </Routes>
    </>
  );
};

export default App;