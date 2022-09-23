import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AddBook, AddUser, Books, Home } from "./pages";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/add-book" element={<AddBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
