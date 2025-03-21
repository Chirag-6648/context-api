import React, { useContext, useState } from "react";
import userContext from "../context/userContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [passwod, setPassword] = useState("");

  const { setUser } = useContext(userContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, passwod });
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <br />
      <input
        type="text"
        placeholder="Password"
        value={passwod}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <br />
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
};

export default Login;
