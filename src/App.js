import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AddBook, AddUser, Books, Home, User } from "./pages";

import "./App.scss";
import { Header } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/books" element={<Books />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/add-book" element={<AddBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
