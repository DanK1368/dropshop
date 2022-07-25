import {
  StyledCartContainer,
  StyledBackdrop,
  StyledFlexContainer,
  StyledProductContainer,
  StyledBtnContainer,
  StyledTotalAmount,
  StyledCheckOutBtn,
  StyledRemoveAllBtn,
  StyledGifContainer,
} from "../styles/CartSummary";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import emptyCartGif from "../../assets/cart.gif";

import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  TOGGLE_CART_MODAL,
  INCREASE,
  DECREASE,
  REMOVE_ALL_ITEMS,
  REMOVE_SINGLE_ITEM,
} from "../../redux/cartSlice";

const CartSummary = () => {
  const ref = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart, total } = useSelector(store => store.cart);

  // used to navigate to the checkout on button click, and close the modal after
  const handleNavigate = () => {
    navigate("/checkout/details");
    dispatch(TOGGLE_CART_MODAL());
  };

  // Function to close the modal when we click outside the cart summary
  useOnClickOutside(ref, () => dispatch(TOGGLE_CART_MODAL()));

  return (
    <StyledBackdrop>
      <StyledCartContainer ref={ref}>
        <StyledFlexContainer>
          <h3>CART ({cart.length})</h3>
          <StyledRemoveAllBtn onClick={() => dispatch(REMOVE_ALL_ITEMS())}>
            Remove all
          </StyledRemoveAllBtn>
        </StyledFlexContainer>

        {!cart.length ? (
          <StyledGifContainer>
            <img src={emptyCartGif} alt="" />
          </StyledGifContainer>
        ) : (
          cart.map(item => (
            <StyledFlexContainer key={item.id}>
              <StyledProductContainer>
                <img src={item.image} alt="" />
                <div>
                  <p>{item.name}</p>
                  <p>$ {item.price.toFixed(2)}</p>
                </div>
              </StyledProductContainer>
              <StyledBtnContainer>
                <button
                  onClick={() => {
                    if (item.amount === 1) {
                      dispatch(REMOVE_SINGLE_ITEM(item.id));
                      return;
                    } else {
                      dispatch(DECREASE(item.id));
                    }
                  }}
                >
                  <AiOutlineMinus />
                </button>
                <p>{item.amount} </p>
                <button onClick={() => dispatch(INCREASE(item.id))}>
                  <AiOutlinePlus />
                </button>
              </StyledBtnContainer>
            </StyledFlexContainer>
          ))
        )}

        <StyledTotalAmount>
          <p>TOTAL</p>
          <span>$ {total.toFixed(2)}</span>
        </StyledTotalAmount>
        <StyledCheckOutBtn onClick={handleNavigate}>CHECKOUT</StyledCheckOutBtn>
      </StyledCartContainer>
    </StyledBackdrop>
  );
};
export default CartSummary;

// Hook --> this will close the PopUp when we click outside
function useOnClickOutside(ref, handler) {
  useEffect(
    () => {
      const listener = event => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }

        handler(event);
      };

      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);

      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]
  );
}
