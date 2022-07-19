import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StyledContainer, StyledForm } from "../styles/Login";
import { loginUser } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import spinner2 from "../../assets/spinner2.gif";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pending } = useSelector(store => store.user);
  const [loginValues, setLoginValues] = useState({
    username: "",
    password: "",
  });

  const handleLogin = e => {
    e.preventDefault();
    loginUser(loginValues, dispatch, navigate);
  };

  return (
    <StyledContainer>
      <h1>
        <span>Login</span> <br /> To Your Account
      </h1>
      {pending ? (
        <img src={spinner2} alt="" />
      ) : (
        <StyledForm onSubmit={handleLogin}>
          <label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              value={loginValues.username}
              onChange={e =>
                setLoginValues(prevState => {
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
              value={loginValues.password}
              onChange={e =>
                setLoginValues(prevState => {
                  return { ...prevState, [e.target.name]: e.target.value };
                })
              }
            />
          </label>
          <button>SUBMIT</button>
          <p>
            Don't have an account? Sign up <Link to="/registration">here</Link>
          </p>
        </StyledForm>
      )}
    </StyledContainer>
  );
};
export default Login;
