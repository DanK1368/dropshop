import styled from "styled-components";
import productImage from "../../assets/product-xx99-mark-two-headphones/desktop/image-product.jpg";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleItem } from "../../redux/productApiCalls";
import spinner from "../../assets/spinner2.gif";
import {
  ADD_TO_CART,
  INCREASE_AMOUNT_OF_ITEMS,
  DECREASE_AMOUNT_OF_ITEMS,
} from "../../redux/cartSlice";

export const StyledOuterContainer = styled.div`
  /* background: rgba(0, 0, 0, 0.1); */
  min-height: 100vh;
  width: clamp(500px, 80%, 1450px);
  margin: 0 auto;
  margin-block: 4rem;
`;

// sample array of pictures -> should always be 3 pictures for this layout
const ProductDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productId } = useParams();
  const { singleItem, pending } = useSelector(store => store.product);
  const { amountOfItems } = useSelector(store => store.cart);

  useEffect(() => {
    fetchSingleItem(productId, dispatch);
  }, []);

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
      {pending ? (
        <img src={spinner} alt="" />
      ) : (
        singleItem[0] && (
          <>
            <StyledProductContainer>
              <img src={singleItem[0].image} alt="" />

              <StyledProductDetails>
                <h2>New Product</h2>
                <StyledCartContainer>
                  <h3>{singleItem[0].name}</h3>
                  <p>{singleItem[0].description}</p>
                  <div>
                    <p>CHF {singleItem[0].price.toFixed(2)} </p>
                    <p>Stock {singleItem[0].stock}</p>
                  </div>
                </StyledCartContainer>
                <StyledBtnContainer>
                  <div>
                    <button
                      onClick={() => {
                        if (amountOfItems === 1) {
                          return;
                        } else {
                          dispatch(DECREASE_AMOUNT_OF_ITEMS());
                        }
                      }}
                    >
                      <AiOutlineMinus />
                    </button>
                    <p>{amountOfItems}</p>
                    <button
                      onClick={() => dispatch(INCREASE_AMOUNT_OF_ITEMS())}
                    >
                      <AiOutlinePlus />
                    </button>
                  </div>
                  <StyledAddToCartBtn
                    onClick={() => dispatch(ADD_TO_CART(singleItem[0]))}
                  >
                    ADD TO CART
                  </StyledAddToCartBtn>
                </StyledBtnContainer>
              </StyledProductDetails>
            </StyledProductContainer>
            {/* Features Container and items inside the box */}
            <StyledFeaturesContainer>
              <StyledFeatures>
                <h4>Features</h4>
                <p>{singleItem[0].features}</p>
              </StyledFeatures>
              <StyledBoxItems>
                <h4>In the box</h4>
                <ul>
                  {singleItem[0].box_items.split(",").map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </StyledBoxItems>
            </StyledFeaturesContainer>
            {/* Picture Gallery */}
            <StyledPictureGrid>
              {pics.map(pic => (
                <img key={pic.id} src={pic.imageUrl} alt="" />
              ))}
            </StyledPictureGrid>
          </>
        )
      )}
      {/* Container with Picture and details about product */}
    </section>
  );
};
export default ProductDetails;
