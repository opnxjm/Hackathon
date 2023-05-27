import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./component/Navbar";
import Welcome from "./page/Welcome";
import RegisterPage from "./page/Register";
import LoginPage from "./page/Login";
import Lotto from "./page/Lotto";
import NumberLottoCard from "./component/NumberLottoCard";
import Favlist from "./page/Favlist";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/lotto" element={<Lotto />} />
        <Route path="/favorite" element={<Favlist />} />

      </Routes>
    </BrowserRouter>

    // <>
    // <NumberLottoCard/>
    // </>
  );
}

export default App;
