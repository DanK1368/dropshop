import {
  StyledCartContainer,
  StyledFlexContainer,
  StyledProductContainer,
} from "../styles/Wishlist";
import image1 from "../../assets/product-xx59-headphones/desktop/image-product.jpg";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { listAllItems } from "../../redux/productApiCalls";

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
