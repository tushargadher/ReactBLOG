import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Register = () => {
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(input);
    try {
      const res = await axios.post("http://localhost:3000/api/auth/register", input);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="auth">
      <h1>Register Here</h1>
      <form onSubmit={handleSubmit}>
        <input
          required
          type="text"
          placeholder="Username"
          name="username"
          onChange={(e) => handleChange(e)}
        />
        <input
          required
          type="email"
          placeholder="Email"
          name="email"
          onChange={(e) => handleChange(e)}
        />
        <input
          required
          type="password"
          placeholder="Password"
          name="password"
          onChange={(e) => handleChange(e)}
        />
        <button type="submit">Register</button>
        <p>This is a error</p>
        <span>
          Already Registerd ?<Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};
export default Register;
