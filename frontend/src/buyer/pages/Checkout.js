import { StyledGoBackBtnContainer } from "../styles/ProductDetails";
import {
  StyledOuterContainer,
  StyledForm,
  StyledInputContainer,
  StyledInputGrid,
} from "../styles/Checkout";
import { Link, useNavigate } from "react-router-dom";
import CheckoutSummary from "../components/CheckoutSummary";
import { useState } from "react";
import { useSelector } from "react-redux";

const Checkout = () => {
  const navigate = useNavigate();
  const { userInfo } = useSelector(store => store.user);

  const [profileValues, setProfileValues] = useState({
    first_name: userInfo.first_name,
    last_name: userInfo.last_name,
    email: userInfo.email,
    phone_number: userInfo.phone_number,
    street: userInfo.street,
    zip: userInfo.zip,
    city: userInfo.city,
    country: userInfo.country,
  });

  const handleUpdateProfileValues = e => {
    setProfileValues(prevState => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  return (
    <div>
      <StyledGoBackBtnContainer>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </StyledGoBackBtnContainer>
      <StyledOuterContainer>
        <StyledForm>
          <div>
            <h1>CHECKOUT</h1>
            <p>
              Do you have an account? Login <Link to="/login">here</Link>
            </p>
          </div>
          <div>
            <h2>Billing Details</h2>
            <StyledInputGrid>
              <StyledInputContainer>
                <label htmlFor="first_name">First Name</label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  value={profileValues.first_name}
                  onChange={handleUpdateProfileValues}
                />
              </StyledInputContainer>
              <StyledInputContainer>
                <label htmlFor="last_name">Last Name</label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  value={profileValues.last_name}
                  onChange={handleUpdateProfileValues}
                />
              </StyledInputContainer>
              <StyledInputContainer>
                <label htmlFor="email">E-Mail Address</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={profileValues.email}
                  onChange={handleUpdateProfileValues}
                />
              </StyledInputContainer>
              <StyledInputContainer>
                <label htmlFor="phone_number">Phone Number</label>
                <input
                  type="text"
                  id="phone_number"
                  name="phone_number"
                  value={profileValues.phone_number}
                  onChange={handleUpdateProfileValues}
                />
              </StyledInputContainer>
            </StyledInputGrid>
          </div>

          <div>
            <h2>Shipping Info</h2>
            <StyledInputGrid>
              <StyledInputContainer>
                <label htmlFor="street">Address</label>
                <input
                  type="text"
                  id="street"
                  name="street"
                  value={profileValues.street}
                  onChange={handleUpdateProfileValues}
                />
              </StyledInputContainer>
              <StyledInputContainer>
                <label htmlFor="name">Zip Code</label>
                <input
                  type="text"
                  id="zip"
                  name="zip"
                  value={profileValues.zip}
                  onChange={handleUpdateProfileValues}
                />
              </StyledInputContainer>
              <StyledInputContainer>
                <label htmlFor="name">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={profileValues.city}
                  onChange={handleUpdateProfileValues}
                />
              </StyledInputContainer>
              <StyledInputContainer>
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={profileValues.country}
                  onChange={handleUpdateProfileValues}
                />
              </StyledInputContainer>
            </StyledInputGrid>
          </div>

          <div>
            <h2>Payment Details</h2>
            <p>
              Click on <span>Continue & Pay</span> to go to the Payment Page
            </p>
          </div>
        </StyledForm>

        <CheckoutSummary />
      </StyledOuterContainer>
    </div>
  );
};
export default Checkout;
