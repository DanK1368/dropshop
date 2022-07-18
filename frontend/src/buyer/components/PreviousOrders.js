import {
  StyledCartContainer,
  StyledFlexContainer,
  StyledProductContainer,
} from "../styles/PreviousOrders";
import image1 from "../../assets/product-xx59-headphones/desktop/image-product.jpg";

const PreviousOrders = () => {
  return (
    <StyledCartContainer>
      <StyledFlexContainer>
        <h3>PREVIOUS ORDERS</h3>
      </StyledFlexContainer>

      <StyledProductContainer>
        <div>
          <img src={image1} alt="" />
          <div>
            <p>XX99 MK II</p>
            <p>$ 2,999</p>
          </div>
        </div>
        <p>15 June 2022</p>
      </StyledProductContainer>
    </StyledCartContainer>
  );
};
export default PreviousOrders;
