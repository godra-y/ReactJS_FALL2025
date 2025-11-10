import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import RootLayout from "./components/rootlayout/RootLayout";
import CharacterList from "./pages/character-list/CharacterList";
import CharacterDetails from "./pages/character-details/CharacterDetails";
import About from "./pages/about/About";
import Home from "./pages/home/Home"; 
import Login from "./pages/login/Login";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="characters" element={<CharacterList />} />
          <Route path="login" element={<Login />} />
          <Route path="characters/:id" element={<CharacterDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
