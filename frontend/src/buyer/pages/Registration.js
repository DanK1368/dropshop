import { Link } from "react-router-dom";
import { StyledContainer, StyledForm } from "../styles/Login";

const Registration = () => {
  return (
    <StyledContainer>
      <h1>
        <span>Register</span> <br /> your new account
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

        <button>SUBMIT</button>
        <p>
          Already have an account? Login <Link to="/login">here</Link>
        </p>
      </StyledForm>
    </StyledContainer>
  );
};
export default Registration;
