import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import UsersList from "./components/UsersList";
import CreateUser from "./components/CreateUser";
import EditUser from "./components/EditUser";
import FilePreview from "./components/FilePreview";
import "./index.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/users" element={<UsersList />} />
          <Route path="/create-user" element={<CreateUser />} />
          <Route path="/edit-user/:id" element={<EditUser />} />
          <Route path="/files/:id" element={<FilePreview />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
