import React from "react";
import "./assets/styles/App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import Profile from "./pages/Profile";
import Auctions from "./pages/Auctions";
import Auction from "./pages/Auction";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/auctions" element={<Auctions />} />
          <Route path="/auction" element={<Auction />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
