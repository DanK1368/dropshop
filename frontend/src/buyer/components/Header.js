import React from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import {
  Main,
  PageLinks,
  StyledShowCartBtn,
  StyledProfileContainer,
} from "../styles/Header";
import CartSummary from "./CartSummary";
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TOGGLE_CART_MODAL } from "../../redux/cartSlice";
import profile_pic from "../../assets/profile_pic.jpg";

// not forget to take a look at the border-bottom
const Header = () => {
  const { showCartModal } = useSelector(state => state.cart);
  const { userInfo } = useSelector(state => state.user);
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
          <NavLink to="/headphones">HEADPHONES</NavLink>
          <NavLink to="/speakers">SPEAKERS</NavLink>
          <NavLink to="/earphones">EARPHONES</NavLink>
          <NavLink to="/login">LOGIN</NavLink>
        </PageLinks>
        <StyledProfileContainer>
          <p>
            Welcome <br /> {userInfo.first_name}
          </p>
          <Link to="/user/profile">
            <img src={profile_pic} alt="" />
          </Link>
          <StyledShowCartBtn onClick={() => dispatch(TOGGLE_CART_MODAL())}>
            <RiShoppingCartLine color="white" size={20} />
          </StyledShowCartBtn>
        </StyledProfileContainer>
      </Main>
      {showCartModal && <CartSummary />}
    </>
  );
};
export default Header;
