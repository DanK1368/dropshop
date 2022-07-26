import {
  StyledCartContainer,
  StyledFlexContainer,
  StyledProductContainer,
  StyledTotalAmount,
  StyledContinuePayBtn,
  StyledInnerContainer,
} from "../styles/CheckoutSummary";
import image1 from "../../assets/product-xx59-headphones/desktop/image-product.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ADD_SOLD_ITEMS } from "../../redux/productSlice";

const CartSummary = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart, total } = useSelector(store => store.cart);

  const shippingCost = 9;
  const grandTotal = total + shippingCost;

  return (
    <StyledCartContainer>
      <StyledFlexContainer>
        <h3>SUMMARY</h3>
      </StyledFlexContainer>

      <StyledProductContainer>
        {cart.map(item => (
          <StyledInnerContainer key={item.id}>
            <div>
              <img src={item.image} alt="" />
              <div>
                <p>{item.name}</p>
                <p>CHF {item.price.toFixed(2)}</p>
              </div>
            </div>
            <p>x {item.amount}</p>
          </StyledInnerContainer>
        ))}
      </StyledProductContainer>

      <StyledTotalAmount>
        <div>
          <p>TOTAL</p>
          <span>CHF {total.toFixed(2)}</span>
        </div>
        <div>
          <p>SHIPPING</p>
          <span>CHF {shippingCost.toFixed(2)}</span>
        </div>
        <div>
          <p>GRAND TOTAL</p>
          <span>CHF {grandTotal.toFixed(2)}</span>
        </div>
      </StyledTotalAmount>
      <StyledContinuePayBtn
        onClick={() => {
          dispatch(ADD_SOLD_ITEMS(cart));
          navigate("/checkout/success");
        }}
      >
        CONTINUE & PAY
      </StyledContinuePayBtn>
    </StyledCartContainer>
  );
};
export default CartSummary;
