import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppContainer from "../components/AppContainer";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "Yes",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    const { name, phone, email, password, agency } = form;

    if (!name || !phone || !email || !password || !agency) {
      alert("Please fill all required fields");
      return;
    }

    localStorage.setItem("user", JSON.stringify(form));
    alert("Account created successfully!");
    navigate("/login");
  };

  return (
    <AppContainer>
      <h1>Create your PopX account</h1>

      <label>Full Name*</label>
      <input
        name="name"
        placeholder="Full Name"
        onChange={handleChange}
      />

      <label>Phone number*</label>
      <input
        name="phone"
        placeholder="XXXXX"
        onChange={handleChange}
      />

      <label>Email address*</label>
      <input
        name="email"
        type="email"
        placeholder="Enter Email address"
        onChange={handleChange}
      />

      <label>Password*</label>
      <input
        name="password"
        type="password"
        placeholder="Enter Password"
        onChange={handleChange}
      />

      <label>Company name</label>
      <input
        name="company"
        placeholder="Company Name"
        onChange={handleChange}
      />

      <label>Are you an Agency?*</label>
      <div className="radio-group">
        <label>
          <input
            type="radio"
            name="agency"
            value="Yes"
            checked={form.agency === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>

        <label>
          <input
            type="radio"
            name="agency"
            value="No"
            checked={form.agency === "No"}
            onChange={handleChange}
          />
          No
        </label>
      </div>

      <button className="primary" onClick={handleRegister}>
        Create Account
      </button>
    </AppContainer>
  );
}
