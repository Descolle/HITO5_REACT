import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import CardPizza from "./components/CardPizza";
import Cart from "./components/Cart";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import NotFound from "./components/views/NotFound";
import Profile from "./components/views/Profile";


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
      <Route path="/HITO5_REACT/profile" element={<Profile/>}/>
      <Route path="/HITO5_REACT/*" element={<NotFound/>}/>
    </Routes>
    </>
  );
}

export default App;
