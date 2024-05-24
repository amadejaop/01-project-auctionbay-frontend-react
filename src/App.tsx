import React from "react";
import "./assets/styles/App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import Profile from "./components/Profile";
import MyAuctions from "./pages/MyAuctions";
import Bidding from "./pages/Bidding";
import Won from "./pages/Won";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route element={<Profile />}>
            <Route path="/my-auctions" element={<MyAuctions />} />
            <Route path="/bidding" element={<Bidding />} />
            <Route path="/won" element={<Won />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
