import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import CardPizza from "./components/CardPizza";
import "./App.css";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import NavBar from "./components/Navbar";




function App() {
  return (
    <>
    <NavBar></NavBar>
      <Home></Home>
      <CardPizza></CardPizza>
      <Cart></Cart>
      <Footer></Footer>
    </>
  );
}

export default App;
