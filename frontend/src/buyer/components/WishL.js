import {
    StyledCartContainer,
    StyledBackdrop,
    StyledFlexContainer,
    StyledProductContainer,
    StyledBtnContainer,
    StyledTotalAmount,
    StyledCheckOutBtn,
    StyledRemoveAllBtn,
    StyledGifContainer,
  } from "../styles/CartSummary";
  import { AiOutlineMinus } from "react-icons/ai";
  import wishbox from "../../assets/wishlist.gif";
  
  import { useNavigate } from "react-router-dom";
  import { useEffect, useRef } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import {
    TOGGLE_WISHLIST_MODAL,
    REMOVE_ALL_ITEMS,
    REMOVE_SINGLE_ITEM,
  } from "../../redux/wishlistSlice";
  
  const WishDisplay = () => {
    const ref = useRef();
    const dispatch = useDispatch();
    const { wishlist } = useSelector(store => store.wishlist);
    const navigate = useNavigate();
  
    // Function to close the modal when we click outside the WishListdisplay
    useOnClickOutside(ref, () => dispatch(TOGGLE_WISHLIST_MODAL()));
  
    return (
      <StyledBackdrop>
        <StyledCartContainer ref={ref}>
          <StyledFlexContainer>
            <h3>WISHLIST ({wishlist.length})</h3>
            <StyledRemoveAllBtn onClick={() => dispatch(REMOVE_ALL_ITEMS())}>
              Remove all
            </StyledRemoveAllBtn>
          </StyledFlexContainer>
  
          {!wishlist.length ? (
            <StyledGifContainer>
              <img src={wishbox} alt="" />
            </StyledGifContainer>
          ) : (
            wishlist.map(item => (
              <StyledFlexContainer key={item.id}> 
                <StyledProductContainer onClick={() => {navigate(`/productdetails/${item.id}`); dispatch(TOGGLE_WISHLIST_MODAL())} }>
                  <img src={item.image} alt="" />
                  <div>
                    <p>{item.name}</p>
                    <p>$ {item.price.toFixed(2)}</p>
                  </div>
                </StyledProductContainer>
              </StyledFlexContainer>
              
            ))
          )}
        </StyledCartContainer>
      </StyledBackdrop>
    );
  };
  export default WishDisplay;
  
  // Hook --> this will close the PopUp when we click outside
  function useOnClickOutside(ref, handler) {
    useEffect(
      () => {
        const listener = event => {
          // Do nothing if clicking ref's element or descendent elements
          if (!ref.current || ref.current.contains(event.target)) {
            return;
          }
  
          handler(event);
        };
  
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
  
        return () => {
          document.removeEventListener("mousedown", listener);
          document.removeEventListener("touchstart", listener);
        };
      },
      // Add ref and handler to effect dependencies
      // It's worth noting that because passed in handler is a new ...
      // ... function on every render that will cause this effect ...
      // ... callback/cleanup to run every render. It's not a big deal ...
      // ... but to optimize you can wrap handler in useCallback before ...
      // ... passing it into this hook.
      [ref, handler]
    );
  }