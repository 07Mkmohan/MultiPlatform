import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/PreHome";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Navbar from "./components/NavBar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
