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
  StyledPrice,
  StyledTitel,
} from "../styles/ProductDetails";
import { Link, useNavigate, useParams } from "react-router-dom";
import image1 from "../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg";
import image2 from "../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg";
import image3 from "../../assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg";
import { useSelector } from "react-redux";

export const StyledOuterContainer = styled.div`
  /* background: rgba(0, 0, 0, 0.1); */
  min-height: 100vh;
  width: clamp(500px, 80%, 1450px);
  margin: 0 auto;
  margin-block: 4rem;
`;

// sample array of pictures -> should always be 3 pictures for this layout
const ProductDetails = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const { itemInventory } = useSelector(store => store.product);
  const detailedProduct = itemInventory.filter(
    item => item.id === parseInt(productId)
  );
  const { description, features, name, price, stock, image } =
    detailedProduct[0];

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
        <button onClick={() => navigate(-1)}>Go Back</button>
      </StyledGoBackBtnContainer>
      {/* Container with Picture and details about product */}
      <StyledProductContainer>
        <img src={image} alt="" />

        <StyledProductDetails>
          <h2>New Product</h2>
          <StyledCartContainer>
            <h3>{name}</h3>
            <p>{description}</p>
            <div>
              <p>CHF {price.toFixed(2)} </p>
              <p>Stock {stock}</p>
            </div>
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
          <p>{features}</p>
        </StyledFeatures>
        <StyledBoxItems>
          <h4>In the box</h4>
          <ul>
            <li>Box Items</li>
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
