import { Link } from "react-router-dom";
import { StyledContainer, StyledForm } from "../styles/Login";

const Login = () => {
  return (
    <StyledContainer>
      <h1>
        <span>Login</span> <br /> To Your Account
      </h1>
      <StyledForm>
        <label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="E-Mail Address"
          />
        </label>
        <label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
        </label>
        <button>SUBMIT</button>
        <p>
          Don't have an account? Sign up <Link to="/registration">here</Link>
        </p>
      </StyledForm>
    </StyledContainer>
  );
};
export default Login;
