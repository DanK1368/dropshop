import styled from "styled-components";
import productImage from "../../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export const StyledOuterContainer = styled.div`
  background: rgba(0, 0, 0, 0.1);
  min-height: 100vh;
  width: clamp(500px, 80%, 1450px);
  margin: 0 auto;
  margin-block: 4rem;
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

  p {
    line-height: 1.7;
  }
`;

const StyledBtnContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  padding-top: 1rem;

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
      padding-inline: 1rem;
    }
  }
`;

const StyledAddToCartBtn = styled.button`
  background: none;
  border: none;
  padding: 1rem 2rem;
  background-color: #d87d4a;
  color: white;
`;

const StyledFeaturesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledFeatures = styled.div`
  flex: 2;
  background-color: aqua;

  p {
    max-width: 50ch;
    line-height: 1.7;
  }
`;

const StyledBoxItems = styled.div`
  flex: 1;
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
            <StyledAddToCartBtn>ADD TO CART</StyledAddToCartBtn>
          </StyledBtnContainer>
        </StyledProductDetails>
      </StyledProductContainer>
      {/* Features Container and items inside the box */}
      <StyledFeaturesContainer>
        <StyledFeatures>
          <h4>Features</h4>
          <p>
            Featuring a genuine leather head strap and premium earcups, these
            headphones deliver superior comfort for those who like to enjoy
            endless listening. It includes intuitive controls designed for any
            situation. Whether you’re taking a business call or just in your own
            personal space, the auto on/off and pause features ensure that
            you’ll never miss a beat.
          </p>
          <p>
            The advanced Active Noise Cancellation with built-in equalizer allow
            you to experience your audio world on your terms. It lets you enjoy
            your audio in peace, but quickly interact with your surroundings
            when you need to. Combined with Bluetooth 5. 0 compliant
            connectivity and 17 hour battery life, the XX99 Mark II headphones
            gives you superior sound, cutting-edge technology, and a modern
            design aesthetic.
          </p>
        </StyledFeatures>
        <StyledBoxItems>
          <h4>In the box</h4>
          <ul>
            <li>
              <span>2x</span>
              Replacement Earcups
            </li>
            <li>
              <span>1x</span>
              User Manual
            </li>
            <li>
              <span>1x</span>
              3.5mm 5m Audio Cable
            </li>
            <li>
              <span>1x</span>
              Travel Bag
            </li>
          </ul>
        </StyledBoxItems>
      </StyledFeaturesContainer>
      {/* Picture Gallery */}
    </section>
  );
};
export default ProductDetails;
