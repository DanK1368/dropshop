import {
  StyledCartContainer,
  StyledBackdrop,
  StyledFlexContainer,
  StyledProductContainer,
  StyledBtnContainer,
  StyledTotalAmount,
  StyledCheckOutBtn,
  StyledRemoveAllBtn,
} from "../styles/CartSummary";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import image1 from "../../assets/product-xx59-headphones/desktop/image-product.jpg";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { TOGGLE_CART_MODAL } from "../../redux/cartSlice";

const CartSummary = () => {
  const ref = useRef();
  const dispatch = useDispatch();

  // Function to close the modal when we click outside the cart summary
  useOnClickOutside(ref, () => dispatch(TOGGLE_CART_MODAL()));

  return (
    <StyledBackdrop>
      <StyledCartContainer ref={ref}>
        <StyledFlexContainer>
          <h3>CART (3)</h3>
          <StyledRemoveAllBtn>Remove all</StyledRemoveAllBtn>
        </StyledFlexContainer>

        <StyledFlexContainer>
          <StyledProductContainer>
            <img src={image1} alt="" />
            <div>
              <p>XX99 MK II</p>
              <p>$ 2,999</p>
            </div>
          </StyledProductContainer>
          <StyledBtnContainer>
            <button>
              <AiOutlineMinus />
            </button>
            <p>1</p>
            <button>
              <AiOutlinePlus />
            </button>
          </StyledBtnContainer>
        </StyledFlexContainer>

        <StyledTotalAmount>
          <p>TOTAL</p>
          <span>$ 5,396</span>
        </StyledTotalAmount>
        <StyledCheckOutBtn>CHECKOUT</StyledCheckOutBtn>
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
