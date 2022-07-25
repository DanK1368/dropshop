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
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_USER_INFO } from "../../redux/userSlice";
import { useEffect, useState } from "react";
import { updateUserProfile } from "../../redux/apiCalls";
import { getUserProfile } from "../../redux/apiCalls";

const Profile = () => {
  const { userInfo, pending } = useSelector(store => store.user);

  // state used to update user info
  const [profileValues, setProfileValues] = useState({
    first_name: userInfo.first_name,
    last_name: userInfo.last_name,
    email: userInfo.email,
    phone: userInfo.phone,
    street: userInfo.street,
    zip: userInfo.zip,
    city: userInfo.city,
    country: userInfo.country,
  });
  const dispatch = useDispatch();

  // this function will save any changes made by the user to their info
  const handleUpdate = e => {
    e.preventDefault();
    dispatch(UPDATE_USER_INFO(profileValues));
    updateUserProfile(profileValues, dispatch);
  };

  return (
    <div>
      <StyledGoBackBtnContainer>
        <Link to="/">Go Back</Link>
      </StyledGoBackBtnContainer>

      {!pending && (
        <StyledOuterContainer>
          <StyledForm onSubmit={handleUpdate}>
            <div>
              <h1>YOUR PROFILE</h1>
            </div>
            <div>
              <h2>Personal Info</h2>
              <StyledInputGrid>
                <StyledInputContainer>
                  <label htmlFor="first_name">First Name</label>
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    value={profileValues.first_name}
                    onChange={e =>
                      setProfileValues(prevState => {
                        return {
                          ...prevState,
                          [e.target.name]: e.target.value,
                        };
                      })
                    }
                  />
                </StyledInputContainer>
                <StyledInputContainer>
                  <label htmlFor="last_name">Last Name</label>
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    value={profileValues.last_name}
                    onChange={e =>
                      setProfileValues(prevState => {
                        return {
                          ...prevState,
                          [e.target.name]: e.target.value,
                        };
                      })
                    }
                  />
                </StyledInputContainer>
                <StyledInputContainer>
                  <label htmlFor="email">E-Mail Address</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={profileValues.email}
                    onChange={e =>
                      setProfileValues(prevState => {
                        return {
                          ...prevState,
                          [e.target.name]: e.target.value,
                        };
                      })
                    }
                  />
                </StyledInputContainer>
                <StyledInputContainer>
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={profileValues.phone}
                    onChange={e =>
                      setProfileValues(prevState => {
                        return {
                          ...prevState,
                          [e.target.name]: e.target.value,
                        };
                      })
                    }
                  />
                </StyledInputContainer>
              </StyledInputGrid>
            </div>

            <div>
              <h2>Shipping Info</h2>
              <StyledInputGrid>
                <StyledInputContainer>
                  <label htmlFor="address">Street and Number</label>
                  <input
                    type="text"
                    id="street"
                    name="street"
                    value={profileValues.street}
                    onChange={e =>
                      setProfileValues(prevState => {
                        return {
                          ...prevState,
                          [e.target.name]: e.target.value,
                        };
                      })
                    }
                  />
                </StyledInputContainer>
                <StyledInputContainer>
                  <label htmlFor="zip">Zip Code</label>
                  <input
                    type="text"
                    id="zip"
                    name="zip"
                    value={profileValues.zip}
                    onChange={e =>
                      setProfileValues(prevState => {
                        return {
                          ...prevState,
                          [e.target.name]: e.target.value,
                        };
                      })
                    }
                  />
                </StyledInputContainer>
                <StyledInputContainer>
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={profileValues.city}
                    onChange={e =>
                      setProfileValues(prevState => {
                        return {
                          ...prevState,
                          [e.target.name]: e.target.value,
                        };
                      })
                    }
                  />
                </StyledInputContainer>
                <StyledInputContainer>
                  <label htmlFor="country">Country</label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={profileValues.country}
                    onChange={e =>
                      setProfileValues(prevState => {
                        return {
                          ...prevState,
                          [e.target.name]: e.target.value,
                        };
                      })
                    }
                  />
                </StyledInputContainer>
              </StyledInputGrid>
            </div>

            <div>
              <h2>update personal details</h2>
              <StyledBtnContainer>
                <StyledSaveBtn>SAVE</StyledSaveBtn>
                <StyledDeleteBtn type="button">Delete Account</StyledDeleteBtn>
              </StyledBtnContainer>
            </div>
          </StyledForm>

          <StyledRightContainer>
            <Wishlist />
            <PreviousOrders />
          </StyledRightContainer>
        </StyledOuterContainer>
      )}
    </div>
  );
};
export default Profile;
