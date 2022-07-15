import styled from "styled-components";
import productImage from "../../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import {
  StyledGoBackBtnContainer,
  StyledProductContainer,
  StyledProductDetails,
  StyledCartContainer,
  StyledBtnContainer,
  StyledAddToCartBtn,
  StyledFeaturesContainer,
  StyledFeatures,
  StyledBoxItems,
  StyledPictureGrid,
} from "../styles/ProductDetails";
import { Link } from "react-router-dom";
import image1 from "../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg";
import image2 from "../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg";
import image3 from "../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg";

export const StyledOuterContainer = styled.div`
  /* background: rgba(0, 0, 0, 0.1); */
  min-height: 100vh;
  width: clamp(500px, 80%, 1450px);
  margin: 0 auto;
  margin-block: 4rem;
`;

// sample array of pictures -> should always be 3 pictures for this layout
const ProductDetails = () => {
  const [pics, setPics] = useState([
    {
      id: 1,
      imageUrl: image1,
    },
    {
      id: 2,
      imageUrl: image2,
    },
    {
      id: 3,
      imageUrl: image3,
    },
  ]);

  return (
    <section>
      {/* Button Container */}
      <StyledGoBackBtnContainer>
        <Link to="/">Go Back</Link>
      </StyledGoBackBtnContainer>
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
      <StyledPictureGrid>
        {pics.map(pic => (
          <img key={pic.id} src={pic.imageUrl} alt="" />
        ))}
      </StyledPictureGrid>
    </section>
  );
};
export default ProductDetails;
