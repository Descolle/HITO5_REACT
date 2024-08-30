import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import CardPizza from "./components/CardPizza";
import "./App.css";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import NavBar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";


function App() {
  return (
    <>
    <NavBar></NavBar>
    <CardPizza></CardPizza>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/login" element={<LogIn/>}/>
      <Route path="/register" element={<SignUp/>}/>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
