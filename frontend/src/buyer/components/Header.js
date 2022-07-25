import React from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import { BsHeart } from "react-icons/bs";
import {
  Main,
  PageLinks,
  StyledShowCartBtn,
  StyledProfileContainer,
  StyledCartContainer,
} from "../styles/Header";
import CartSummary from "./CartSummary";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TOGGLE_WISHLIST_MODAL } from "../../redux/wishlistSlice";
import { TOGGLE_CART_MODAL } from "../../redux/cartSlice";
import { LOGOUT_USER } from "../../redux/userSlice";
import profile_pic from "../../assets/profile_pic.jpg";
import DropDown from "./DropDown";
import { getUserProfile } from "../../redux/apiCalls";

// TODO not forget to take a look at the border-bottom
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticatedUser, userInfo } = useSelector(store => store.user);
  const { showCartModal, amount } = useSelector(store => store.cart);
  //const { showwishlistModal, quantity } = useSelector(store=>store.wishlist);

  return (
    <>
      <Main>
        <div>
          <h2>
            <Link to="/">
              <b>dropshop</b>
            </Link>
          </h2>
        </div>
        <PageLinks>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/marketplace">SHOP</NavLink>
          <DropDown />
          {!isAuthenticatedUser && <NavLink to="/seller">SELL</NavLink>}
          {isAuthenticatedUser && <NavLink to="/seller">SELL</NavLink>}
          {isAuthenticatedUser ? (
            <button onClick={() => dispatch(LOGOUT_USER())}>LOGOUT</button>
          ) : (
            <NavLink to="/login">LOGIN</NavLink>
          )}
        </PageLinks>
        <StyledProfileContainer>
          {isAuthenticatedUser && (
            <>
              <p>
                Welcome <br /> {userInfo.first_name}
              </p>
              <button onClick={() => getUserProfile(navigate, dispatch)}>
                <img src={profile_pic} alt="" />
              </button>
            </>
          )}
          <BsHeart/> 
          <StyledCartContainer>                
            <StyledShowCartBtn onClick={() => dispatch(TOGGLE_CART_MODAL())}>
              <RiShoppingCartLine color="white" size={20} />
            </StyledShowCartBtn>
            {amount > 0 && <p>{amount}</p>}
          </StyledCartContainer>
        </StyledProfileContainer>
      </Main>
      {showCartModal && <CartSummary />}
    </>
  );
};
export default Header;