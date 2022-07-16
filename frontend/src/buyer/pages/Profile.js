import styled from "styled-components";
import { Link } from "react-router-dom";
import { StyledGoBackBtnContainer } from "../styles/ProductDetails";
import Wishlist from "../components/Wishlist";
import PreviousOrders from "../components/PreviousOrders";

export const StyledOuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  flex: 3;
  gap: 3rem;

  h1 {
    font-weight: 500;
  }

  h2 {
    color: #d87d4a;
    font-size: 16px;
    font-weight: 400;
    text-transform: uppercase;
  }
`;

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-size: 14px;
    font-weight: 500;
  }

  input {
    padding: 1rem;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;

    &:focus {
      outline: none;
      border: 1px solid #d87d4a;
    }
  }
`;

export const StyledInputGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

export const StyledBtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledSaveBtn = styled.button`
  padding: 1rem 2rem;
  border: none;
  background-color: #d87d4a;
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: 300;
  color: white;
  cursor: pointer;

  &:hover {
    background: #fbaf85;
  }
`;

export const StyledDeleteBtn = styled.button`
  padding: 1rem 1.5rem;
  border: none;
  background-color: #ea5555;
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: 300;
  color: white;
  cursor: pointer;

  &:hover {
    background: #ff9898;
  }
`;

export const StyledRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  align-self: start;
`;

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
