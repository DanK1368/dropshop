import { Link } from "react-router-dom";
import { StyledContainer, StyledForm } from "../styles/Login";

const Login = () => {
  return (
    <StyledContainer>
      <h1>
        <span>Login</span> To Your Account
      </h1>
      <StyledForm>
        <label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="E-Mail Address"
          />
          <Link to="/register">Don't have an account? Sing up here</Link>
        </label>
        <button>SUBMIT</button>
      </StyledForm>
      {/* <p>Please check your Email, we have sent you a registration code.</p> */}
    </StyledContainer>
  );
};
export default Login;
