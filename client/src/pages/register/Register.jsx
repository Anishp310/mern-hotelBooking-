import React, { useState } from "react";
import axios from "axios";
import "./register.css";
const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [img, setImg] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/auth/register", {
        username,
        email,
        country,
        img,
        city,
        phone,
        password,
      });

      // Handle success response
      console.log(response.data);
      // Reset form fields
      setUsername("");
      setEmail("");
      setCountry("");
      setImg("");
      setCity("");
      setPhone("");
      setPassword("");
    } catch (error) {
      // Handle error response
      console.log(error.response.data);
    }
  };

  return (
    <div className="Registration">
      <h1>Registration</h1>
      <form onSubmit={handleRegister}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="country">Country:</label>
        <input
          type="text"
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        />

        <label htmlFor="img">Image URL:</label>
        <input
          type="file"
          id="img"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />

        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />

        <label htmlFor="phone">Phone:</label>
        <input
          type="number"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
