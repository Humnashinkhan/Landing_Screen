import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppContainer from "../components/AppContainer";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      alert("No account found. Please register.");
      return;
    }

    if (
      email === storedUser.email &&
      password === storedUser.password
    ) {
      navigate("/account");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <AppContainer>
      <h1>Signin to your PopX account</h1>

      <label>Email Address</label>
      <input type="email" placeholder="Enter email address" onChange={(e) => setEmail(e.target.value)} />

      <label>Password</label>
      <input type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />

      <button className="primary" onClick={handleLogin}>
        Login
      </button>
    </AppContainer>
  );
}
