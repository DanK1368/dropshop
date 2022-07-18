import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { StyledContainer, StyledForm } from "../styles/Login";
import { registerUser } from "../../redux/apiCalls";

const Registration = () => {
  const navigate = useNavigate();
  const { pending, status } = useSelector(store => store.user);
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const handleRegistration = e => {
    e.preventDefault();
    registerUser(email, dispatch);
  };

  // navigate to validation page if registration is successfull
  useEffect(() => {
    if (status === 201) {
      navigate("/validation");
    } else {
      return;
    }
  }, [status]);

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
            value={email}
            onChange={e => setEmail(e.target.value)}
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
