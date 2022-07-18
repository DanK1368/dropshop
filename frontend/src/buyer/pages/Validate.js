import { Link } from "react-router-dom";
import {
  StyledContainer,
  StyledForm,
  StyledFormGrid,
} from "../styles/Register";

const Validate = () => {
  return (
    <StyledContainer>
      <h1>
        <span>Validate</span> <br /> your account
      </h1>
      <StyledForm>
        <StyledFormGrid>
          <label>
            <input
              type="text"
              name="first_name"
              id="first_name"
              placeholder="First Name"
            />
          </label>
          <label>
            <input
              type="text"
              name="last_name"
              id="last_name"
              placeholder="Last Name"
            />
          </label>
          <label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="E-Mail Address"
            />
          </label>
          <label>
            <input type="text" name="code" id="code" placeholder="Code" />
          </label>
          <label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </label>
          <label>
            <input
              type="password"
              name="password_repeat"
              id="password_repeat"
              placeholder="Repeat Password"
            />
          </label>
        </StyledFormGrid>
        <button>SUBMIT</button>
      </StyledForm>
      {/* <p>Please check your Email, we have sent you a registration code.</p> */}
    </StyledContainer>
  );
};
export default Validate;