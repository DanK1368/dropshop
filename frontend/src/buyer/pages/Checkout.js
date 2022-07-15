import { StyledGoBackBtnContainer } from "../styles/ProductDetails";
import {
  StyledOuterContainer,
  StyledForm,
  StyledInputContainer,
  StyledInputGrid,
} from "../styles/Checkout";
import { Link } from "react-router-dom";

import CheckoutSummary from "../components/CheckoutSummary";

const Checkout = () => {
  return (
    <div>
      <StyledGoBackBtnContainer>
        <Link to="/">Go Back</Link>
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
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" />
              </StyledInputContainer>
              <StyledInputContainer>
                <label htmlFor="name">E-Mail Address</label>
                <input type="text" id="email" name="email" />
              </StyledInputContainer>
              <StyledInputContainer>
                <label htmlFor="name">Phone Number</label>
                <input type="text" id="phone" name="phone" />
              </StyledInputContainer>
            </StyledInputGrid>
          </div>

          <div>
            <h2>Shipping Info</h2>
            <StyledInputGrid>
              <StyledInputContainer>
                <label htmlFor="name">Address</label>
                <input type="text" id="address" name="address" />
              </StyledInputContainer>
              <StyledInputContainer>
                <label htmlFor="name">Zip Code</label>
                <input type="text" id="zip" name="zip" />
              </StyledInputContainer>
              <StyledInputContainer>
                <label htmlFor="name">City</label>
                <input type="text" id="city" name="city" />
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
