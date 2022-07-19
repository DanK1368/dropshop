import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  StyledContainer,
  StyledForm,
  StyledFormGrid,
} from "../styles/Register";
import { validateUser } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import spinner2 from "../../assets/spinner2.gif";

const Validate = () => {
  const navigate = useNavigate();
  const { pending } = useSelector(store => store.user);
  const [validationValues, setValidationValues] = useState({
    email: "",
    validation_code: "",
  });
  const dispatch = useDispatch();

  const handleValidation = e => {
    e.preventDefault();
    validateUser(validationValues, dispatch, navigate);
  };

  return (
    <StyledContainer>
      <h1>
        <span>Validate</span> <br /> your account
      </h1>
      {pending ? (
        <img src={spinner2} alt="" />
      ) : (
        <StyledForm onSubmit={handleValidation}>
          <StyledFormGrid>
            <label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email address"
                required
                value={validationValues.email}
                onChange={e =>
                  setValidationValues(prevState => {
                    return { ...prevState, [e.target.name]: e.target.value };
                  })
                }
              />
            </label>
            <label>
              <input
                type="text"
                name="validation_code"
                id="validation_code"
                placeholder="Validation Code"
                required
                value={validationValues.validation_code}
                onChange={e =>
                  setValidationValues(prevState => {
                    return { ...prevState, [e.target.name]: e.target.value };
                  })
                }
              />
            </label>
          </StyledFormGrid>
          <button>SUBMIT</button>
        </StyledForm>
      )}
    </StyledContainer>
  );
};
export default Validate;
