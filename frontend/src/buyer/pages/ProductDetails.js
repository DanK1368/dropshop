import styled from "styled-components";
import productImage from "../../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export const StyledOuterContainer = styled.div`
  background: rgba(0, 0, 0, 0.1);
  min-height: 100vh;
  width: 90%;
  margin: 0 auto;
`;

const StyledProductContainer = styled.div`
  display: flex;

  img {
    max-width: 500px;
    object-fit: cover;
  }
`;

const StyledProductDetails = styled.div`
  padding: 3rem;
  background-color: aliceblue;
  padding-inline: 5rem;

  h2 {
    font-size: 12px;
    font-weight: 200;
    text-transform: uppercase;
    letter-spacing: 8px;
    color: #d87d4a;
  }
`;

const StyledCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    font-size: 30px;
    text-transform: uppercase;
    max-width: 10ch;
    font-weight: 500;
  }
`;

const StyledBtnContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    background: #f1f1f1;
    padding-inline: 0.5rem;

    button {
      background: none;
      border: none;
    }
  }

  button {
  }
`;

const ProductDetails = () => {
  return (
    <section>
      {/* Button Container */}
      <div>
        <button>Go Back</button>
      </div>
      {/* Container with Picture and details about product */}
      <StyledProductContainer>
        <img src={productImage} alt="" />

        <StyledProductDetails>
          <h2>New Product</h2>
          <StyledCartContainer>
            <h3>XX99 Mark ii headphones</h3>
            <p>
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </p>
            <p>$ 2,999</p>
          </StyledCartContainer>
          <StyledBtnContainer>
            <div>
              <button>
                <AiOutlineMinus />
              </button>
              <p>1</p>
              <button>
                <AiOutlinePlus />
              </button>
            </div>
            <button>ADD TO CART</button>
          </StyledBtnContainer>
        </StyledProductDetails>
      </StyledProductContainer>
      {/* Features Container and items inside the box */}
      <div></div>
      {/* Picture Gallery */}
    </section>
  );
};
export default ProductDetails;
