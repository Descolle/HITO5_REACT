import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import CardPizza from "./components/CardPizza";
import Cart from "./components/Cart";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";


function App() {
  return (
    <>
    <NavBar></NavBar>
    <Routes>
      <Route path="/HITO5_REACT/" element={<Home/>}/>
      <Route path="/HITO5_REACT/pizza" element={<CardPizza/>}/>
      <Route path="/HITO5_REACT/cart" element={<Cart/>}/>
      <Route path="/HITO5_REACT/login" element={<LogIn/>}/>
      <Route path="/HITO5_REACT/register" element={<SignUp/>}/>
    </Routes>
    </>
  );
}

export default App;
