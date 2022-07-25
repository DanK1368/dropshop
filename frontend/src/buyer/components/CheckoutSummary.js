import {
  StyledCartContainer,
  StyledFlexContainer,
  StyledProductContainer,
  StyledTotalAmount,
  StyledContinuePayBtn,
  StyledInnerContainer,
} from "../styles/CheckoutSummary";
import image1 from "../../assets/product-xx59-headphones/desktop/image-product.jpg";
import { useSelector } from "react-redux";

const CartSummary = () => {
  const shippingCost = 9;
  const { cart, total } = useSelector(store => store.cart);

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
          <span>CHF {(total + shippingCost).toFixed(2)}</span>
        </div>
      </StyledTotalAmount>
      <StyledContinuePayBtn>CONTINUE & PAY</StyledContinuePayBtn>
    </StyledCartContainer>
  );
};
export default CartSummary;
