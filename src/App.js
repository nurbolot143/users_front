import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import {
  AddUserBook,
  AddUser,
  Books,
  Users,
  User,
  Book,
  AddBook,
} from "./pages";
import { Header } from "./components";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="*" element={<Navigate to="/users" />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<User />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<Book />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/add-user-book/:id" element={<AddUserBook />} />
        <Route path="/add-book" element={<AddBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
