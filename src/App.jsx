import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import ContactUs from "./Pages/ContactUs/ContactUs";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Profile from "./Pages/Profile/Profile";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import Cart from "./Pages/Cart/Cart";
import StoreContextProvider from "./Components/Contexts/StoreContext";
import ThemeContextProvider from "./Components/Contexts/ThemeContext";
import LoggingPopup from "./Components/LoggingPopup/LoggingPopup";
import { useContext, useState } from "react";
import ProtectedRouts from "./Components/Utils/ProtectedRouts";
import { AuthContext } from "./Components/Contexts/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Orders from "./Pages/Orders/Orders";

const env = import.meta.env;

function App() {
  const { isdisplayLogging, setIsDisplaySignIn } = useContext(AuthContext);
  console.log(env);

  return (
    <StoreContextProvider>
      <ThemeContextProvider>
        <NavBar setIsDisplaySignIn={setIsDisplaySignIn} />
      </ThemeContextProvider>

      {isdisplayLogging ? (
        <LoggingPopup setIsDisplaySignIn={setIsDisplaySignIn} />
      ) : (
        <></>
      )}

      <div className="page-content">
        <ToastContainer />
        {/* ------------------- Routes --------------------- */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/cart" element={<Cart />} />

          {/* ------------------- Protected routes --------------------- */}
          <Route element={<ProtectedRouts />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/orders/place" element={<PlaceOrder />} />
            <Route path="/orders/my" element={<Orders />} />
          </Route>
          {/* ------------------- Protected routes end --------------------- */}
        </Routes>
        {/* ------------------- Routes end --------------------- */}
      </div>

      <Footer />
    </StoreContextProvider>
  );
}

export default App;
