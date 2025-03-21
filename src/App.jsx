import React from "react";
import "./App.css";
import UserContextProvider from "./context/userContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";

const App = () => {
  return (
    <UserContextProvider>
      <h1>hello world</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
};

export default App;
