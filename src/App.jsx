import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Signup from "./pages/Signup.jsx";
import Show from "./pages/Show.jsx";
import New from "./pages/New.jsx";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup /> } />
        <Route path="/show/:id" element={<Show />} />
        <Route path="/new" element={<New />} />
      </Routes>
    </QueryClientProvider>
  );
};

export default App;
