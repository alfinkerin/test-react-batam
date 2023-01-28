import { Route, Routes, useNavigate } from "react-router-dom";
import Register from "./screen/Register/pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Product from "./screen/Register/pages/product";
import Login from "./screen/Login";
import Dashboard from "./screen/Login/dasboard";
import Home from "./screen";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
