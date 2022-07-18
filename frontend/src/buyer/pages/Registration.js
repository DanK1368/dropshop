import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { StyledContainer, StyledForm } from "../styles/Login";
import { registerUser } from "../../redux/apiCalls";

const Registration = () => {
  const navigate = useNavigate();
  const { status } = useSelector(store => store.user);
  const [registrationValues, setRegistrationValues] = useState({
    email: "",
    username: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleRegistration = e => {
    e.preventDefault();
    registerUser(registrationValues, dispatch, navigate);
  };

  return (
    <StyledContainer onSubmit={handleRegistration}>
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
            required
            value={registrationValues.email}
            onChange={e =>
              setRegistrationValues(prevState => {
                return { ...prevState, [e.target.name]: e.target.value };
              })
            }
          />
        </label>
        <label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            required
            value={registrationValues.username}
            onChange={e =>
              setRegistrationValues(prevState => {
                return { ...prevState, [e.target.name]: e.target.value };
              })
            }
          />
        </label>
        <label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
            value={registrationValues.password}
            onChange={e =>
              setRegistrationValues(prevState => {
                return { ...prevState, [e.target.name]: e.target.value };
              })
            }
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
