import { useNavigate } from "react-router-dom";
import {
  StyledBackdrop,
  StyledCartContainer,
  StyledFlexContainer,
  StyledProductContainer,
  StyledInnerProductContainer,
  StyledTotalAmount,
  StyledBackToHomeBtn,
} from "../styles/CheckOutModal";
import OrderConfirmationIcon from "../../assets/checkout/icon-order-confirmation.svg";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { REMOVE_ALL_ITEMS } from "../../redux/cartSlice";

const CheckOutModal = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showRemainingItems, setShowRemainingItems] = useState(false);
  const { cart, total } = useSelector(store => store.cart);

  const shippingCost = 9;
  const grandTotal = total + shippingCost;

  return (
    <StyledBackdrop>
      <StyledCartContainer>
        <div>
          <img src={OrderConfirmationIcon} alt="" />
        </div>
        <div>
          <h3>
            Thank You <br /> For YOur Order
          </h3>
          <p>You will receive an email confirmation shortly.</p>
        </div>
        <StyledFlexContainer>
          <StyledProductContainer>
            {cart
              .filter((item, idx) => idx === 0)
              .map(item => (
                <StyledInnerProductContainer key={item.id}>
                  <img src={item.image} alt="" />
                  <div>
                    <p>{item.name}</p>
                    <p>CHF {item.price.toFixed(2)}</p>
                  </div>
                </StyledInnerProductContainer>
              ))}
            {showRemainingItems &&
              cart
                .filter((item, idx) => idx > 0)
                .map(item => (
                  <StyledInnerProductContainer key={item.id}>
                    <img src={item.image} alt="" />
                    <div>
                      <p>{item.name}</p>
                      <p>CHF {item.price.toFixed(2)}</p>
                    </div>
                  </StyledInnerProductContainer>
                ))}

            <hr />
            <div>
              {cart.length > 0 && cart.length - 1 !== 0 && (
                <button
                  onClick={() => setShowRemainingItems(!showRemainingItems)}
                >
                  {showRemainingItems
                    ? `minimize orders`
                    : `and ${cart.length - 1} other item/s`}
                </button>
              )}
            </div>
          </StyledProductContainer>
          <StyledTotalAmount>
            <p>GRAND TOTAL</p>
            <span>CHF {cart.length > 0 && grandTotal.toFixed(2)}</span>
          </StyledTotalAmount>
        </StyledFlexContainer>

        <StyledBackToHomeBtn
          onClick={() => {
            dispatch(REMOVE_ALL_ITEMS());
            navigate("/");
          }}
        >
          BACK TO HOME
        </StyledBackToHomeBtn>
      </StyledCartContainer>
    </StyledBackdrop>
  );
};
export default CheckOutModal;
