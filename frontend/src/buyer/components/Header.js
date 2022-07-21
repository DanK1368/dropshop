import React from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import {
  Main,
  PageLinks,
  StyledShowCartBtn,
  StyledProfileContainer,
  StyledCartContainer,
} from "../styles/Header";
import CartSummary from "./CartSummary";
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TOGGLE_CART_MODAL } from "../../redux/cartSlice";
import profile_pic from "../../assets/profile_pic.jpg";

// not forget to take a look at the border-bottom
const Header = () => {
  const { isAuthenticatedUser, userInfo } = useSelector(store => store.user);
  const { showCartModal, amount } = useSelector(store => store.cart);
  console.log(amount);

  const dispatch = useDispatch();

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
          <NavLink to="/category-headphones">HEADPHONES</NavLink>
          <NavLink to="/category-speakers">SPEAKERS</NavLink>
          <NavLink to="/category-earphones">EARPHONES</NavLink>
          {!isAuthenticatedUser && <NavLink to="/seller">SELL</NavLink>}
          {isAuthenticatedUser ? (
            <button>LOGOUT</button>
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
              <Link to="/user/profile">
                <img src={profile_pic} alt="" />
              </Link>
            </>
          )}
          <StyledCartContainer>
            <StyledShowCartBtn onClick={() => dispatch(TOGGLE_CART_MODAL())}>
              <RiShoppingCartLine color="white" size={20} />
            </StyledShowCartBtn>
            <p>{amount}</p>
          </StyledCartContainer>
        </StyledProfileContainer>
      </Main>
      {showCartModal && <CartSummary />}
    </>
  );
};
export default Header;
