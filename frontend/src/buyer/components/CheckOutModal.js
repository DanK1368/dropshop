import { Link } from "react-router-dom";
import {
  StyledBackdrop,
  StyledCartContainer,
  StyledFlexContainer,
  StyledProductContainer,
  StyledInnerProductContainer,
  StyledTotalAmount,
} from "../styles/CheckOutModal";
import OrderConfirmationIcon from "../../assets/checkout/icon-order-confirmation.svg";
import image1 from "../../assets/product-xx59-headphones/desktop/image-product.jpg";

const CheckOutModal = () => {
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
            <StyledInnerProductContainer>
              <img src={image1} alt="" />
              <div>
                <p>XX99 MK II</p>
                <p>$ 2,999</p>
              </div>
            </StyledInnerProductContainer>
            <hr />
            <div>
              <p>and 2 other items</p>
            </div>
          </StyledProductContainer>
          <StyledTotalAmount>
            <p>GRAND TOTAL</p>
            <span>$ 5,396</span>
          </StyledTotalAmount>
        </StyledFlexContainer>

        <Link to="/">BACK TO HOME</Link>
      </StyledCartContainer>
    </StyledBackdrop>
  );
};
export default CheckOutModal;
