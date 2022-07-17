import styled from "styled-components";
import { Link } from "react-router-dom";
import { StyledGoBackBtnContainer } from "../styles/ProductDetails";
import {
  StyledOuterContainer,
  StyledForm,
  StyledInputContainer,
  StyledInputGrid,
  StyledBtnContainer,
  StyledSaveBtn,
  StyledDeleteBtn,
  StyledRightContainer,
} from "../styles/Profile";
import Wishlist from "../components/Wishlist";
import PreviousOrders from "../components/PreviousOrders";

const Profile = () => {
  return (
    <div>
      <StyledGoBackBtnContainer>
        <Link to="/">Go Back</Link>
      </StyledGoBackBtnContainer>
      <StyledOuterContainer>
        <StyledForm>
          <div>
            <h1>YOUR PROFILE</h1>
          </div>
          <div>
            <h2>Personal Info</h2>
            <StyledInputGrid>
              <StyledInputContainer>
                <label htmlFor="first_name">First Name</label>
                <input type="text" id="first_name" name="first_name" />
              </StyledInputContainer>
              <StyledInputContainer>
                <label htmlFor="first_name">Last Name</label>
                <input type="text" id="last_name" name="last_name" />
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
                <label htmlFor="name">Street and Number</label>
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
              <StyledInputContainer>
                <label htmlFor="name">Country</label>
                <input type="text" id="city" name="city" />
              </StyledInputContainer>
            </StyledInputGrid>
          </div>

          <div>
            <h2>update personal details</h2>
            <StyledBtnContainer>
              <StyledSaveBtn>SAVE</StyledSaveBtn>
              <StyledDeleteBtn>Delete Account</StyledDeleteBtn>
            </StyledBtnContainer>
          </div>
        </StyledForm>

        <StyledRightContainer>
          <Wishlist />
          <PreviousOrders />
        </StyledRightContainer>
      </StyledOuterContainer>
    </div>
  );
};
export default Profile;
