import React, { useContext, useEffect, useRef } from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import { Main, PageLinks, StyledShowCartBtn } from "../styles/Header";
import cartContext from "../context/cart/CartContext";
import CartSummary from "./CartSummary";

// not forget to take a look at the border-bottom
const Header = () => {
  const { showCartSummary, dispatch } = useContext(cartContext);

  // Function to show the cart summary when we click the cart
  const handleShowCartSummary = () => dispatch({ type: "TOGGLE_CART_SUMMARY" });

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
        <StyledShowCartBtn onClick={handleShowCartSummary}>
          <RiShoppingCartLine color="white" size={20} />
        </StyledShowCartBtn>
      </Main>
      {showCartSummary && <CartSummary />}
    </>
  );
};
export default Header;
