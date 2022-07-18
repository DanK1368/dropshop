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
import { useState } from "react";

const Profile = () => {
  const { userInfo } = useSelector(state => state.user);

  // state used to update user info
  const [values, setValues] = useState({
    first_name: userInfo.first_name,
    last_name: userInfo.last_name,
    email: userInfo.email,
    phone: userInfo.phone,
    address: userInfo.address,
    zip: userInfo.zip,
    city: userInfo.city,
    country: userInfo.country,
  });
  const dispatch = useDispatch();

  // this function will save any changes made by the user to their info
  const handleUpdate = e => {
    e.preventDefault();
    dispatch(UPDATE_USER_INFO(values));
  };

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
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  value={values.first_name}
                  onChange={e =>
                    setValues(prevState => {
                      return { ...prevState, [e.target.name]: e.target.value };
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
                  value={values.last_name}
                  onChange={e =>
                    setValues(prevState => {
                      return { ...prevState, [e.target.name]: e.target.value };
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
                  value={values.email}
                  onChange={e =>
                    setValues(prevState => {
                      return { ...prevState, [e.target.name]: e.target.value };
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
                  value={values.phone}
                  onChange={e =>
                    setValues(prevState => {
                      return { ...prevState, [e.target.name]: e.target.value };
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
                  id="address"
                  name="address"
                  value={values.address}
                  onChange={e =>
                    setValues(prevState => {
                      return { ...prevState, [e.target.name]: e.target.value };
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
                  value={values.zip}
                  onChange={e =>
                    setValues(prevState => {
                      return { ...prevState, [e.target.name]: e.target.value };
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
                  value={values.city}
                  onChange={e =>
                    setValues(prevState => {
                      return { ...prevState, [e.target.name]: e.target.value };
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
                  value={values.country}
                  onChange={e =>
                    setValues(prevState => {
                      return { ...prevState, [e.target.name]: e.target.value };
                    })
                  }
                />
              </StyledInputContainer>
            </StyledInputGrid>
          </div>

          <div>
            <h2>update personal details</h2>
            <StyledBtnContainer>
              <StyledSaveBtn type="submit" onClick={handleUpdate}>
                SAVE
              </StyledSaveBtn>
              <StyledDeleteBtn type="button">Delete Account</StyledDeleteBtn>
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
