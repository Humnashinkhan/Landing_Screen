import { useNavigate } from "react-router-dom";
import AppContainer from "../components/AppContainer";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <AppContainer>
      <div className="welcome-wrapper">
        <div className="welcome-content">
          <h1>Welcome to PopX</h1>
          <p>
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit,
          </p>

          <button
            className="primary"
            onClick={() => navigate("/register")}
          >
            Create Account
          </button>

          <button
            className="secondary"
            onClick={() => navigate("/login")}
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </AppContainer>
  );
}
