import React from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import { Main, PageLinks, StyledShowCartBtn } from "../styles/Header";
import CartSummary from "./CartSummary";
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TOGGLE_CART_MODAL } from "../../redux/cartSlice";

// not forget to take a look at the border-bottom
const Header = () => {
  const { showCartModal } = useSelector(state => state.cart);
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
        <StyledShowCartBtn onClick={() => dispatch(TOGGLE_CART_MODAL())}>
          <RiShoppingCartLine color="white" size={20} />
        </StyledShowCartBtn>
      </Main>
      {showCartModal && <CartSummary />}
    </>
  );
};
export default Header;
