import {
  StyledCartContainer,
  StyledFlexContainer,
  StyledProductContainer,
  StyledTotalAmount,
  StyledContinuePayBtn,
} from "../styles/CheckoutSummary";
import image1 from "../../assets/product-xx59-headphones/desktop/image-product.jpg";

const CartSummary = () => {
  return (
    <StyledCartContainer>
      <StyledFlexContainer>
        <h3>SUMMARY</h3>
      </StyledFlexContainer>

      <StyledProductContainer>
        <div>
          <img src={image1} alt="" />
          <div>
            <p>XX99 MK II</p>
            <p>$ 2,999</p>
          </div>
        </div>
        <p>x 1</p>
      </StyledProductContainer>

      <StyledTotalAmount>
        <div>
          <p>TOTAL</p>
          <span>$ 4,000</span>
        </div>
        <div>
          <p>SHIPPING</p>
          <span>$ 50</span>
        </div>
        <div>
          <p>GRAND TOTAL</p>
          <span>$ 4,500</span>
        </div>
      </StyledTotalAmount>
      <StyledContinuePayBtn>CONTINUE & PAY</StyledContinuePayBtn>
    </StyledCartContainer>
  );
};
export default CartSummary;
