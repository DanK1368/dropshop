import React from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import { Main, PageLinks, StyledShowCartBtn } from "../styles/Header";
import CartSummary from "./CartSummary";
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
            <b>dropshop</b>
          </h2>
        </div>
        <PageLinks>
          <p>HOME</p>
          <p>HEADPHONES</p>
          <p>SPEAKERS</p>
          <p>EARPHONES</p>
          <p>LOGIN</p>
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
