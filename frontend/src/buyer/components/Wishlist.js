import styled from "styled-components";
import image1 from "../../assets/product-xx59-headphones/desktop/image-product.jpg";
import { FaStar } from "react-icons/fa";

export const StyledCartContainer = styled.div`
  min-width: 250px;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: white;
  background-color: white;
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  flex: 1;
  align-self: start;

  img {
    width: 70px;
    height: 70px;
    object-fit: cover;
    border-radius: 10px;
  }
`;

export const StyledFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;

  div:nth-child(1) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  p {
    font-size: 14px;
  }

  p:nth-child(1) {
    font-weight: 500;
    margin: 0;
    margin-bottom: 0.5rem;
  }
  p:nth-child(2) {
    font-weight: 500;
    color: gray;
    margin: 0;
  }
`;

const Wishlist = () => {
  return (
    <StyledCartContainer>
      <StyledFlexContainer>
        <h3>WISHLIST</h3>
      </StyledFlexContainer>

      <StyledProductContainer>
        <div>
          <img src={image1} alt="" />
          <div>
            <p>XX99 MK II</p>
            <p>$ 2,999</p>
          </div>
        </div>
        <FaStar size={25} color="#d87d4a" />
      </StyledProductContainer>
    </StyledCartContainer>
  );
};
export default Wishlist;
