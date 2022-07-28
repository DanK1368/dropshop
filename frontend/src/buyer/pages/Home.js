import React, { useEffect } from "react";
import {
  ProductDescription,
  NewProduct,
  Main,
  MiddleImages,
  SpeakerImg,
  Text,
  TableSpeaker,
  EarphonesProd,
  EarphonesText,
  StyledFeaturedProduct,
} from "../styles/Home";
import XX99 from "../../assets/home/desktop/image-hero.jpg";
import { StyledSeeProduct } from "../styles/SeeProductButton";
import ShopLinks from "../components/ShopLinks";
import Speaker from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import ZX7Speaker from "../../assets/home/desktop/image-speaker-zx7.jpg";
import Earphones from "../../assets/home/desktop/image-earphones-yx1.jpg";
import { useDispatch, useSelector } from "react-redux";
import { fetchFeaturedItem, listAllItems } from "../../redux/productApiCalls";
import { InView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { featuredItems, itemInventory } = useSelector(state => state.product);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    listAllItems(dispatch);
  }, [dispatch]);

  useEffect(() => {
    fetchFeaturedItem(
      JSON.parse(localStorage.getItem("featuredItemId")),
      dispatch
    );
  }, [featuredItems, dispatch]);

  return (
    <Main>
      {featuredItems.length > 0 ? (
        featuredItems.map(item => (
          <InView threshold={0.25}>
            {({ ref, inView }) => (
              <StyledFeaturedProduct
                ref={ref}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.83 }}
                key={item.id}
              >
                <div>
                  <p>NEW PRODUCT</p>
                  <h1>{item.name}</h1>
                  <h4>{item.description}</h4>

                  <StyledSeeProduct
                    onClick={() => navigate(`/productdetails/${item.id}`)}
                  >
                    SEE PRODUCT
                  </StyledSeeProduct>
                </div>
                <div>
                  <img src={item.image} alt="headphones picture" />
                </div>
              </StyledFeaturedProduct>
            )}
          </InView>
        ))
      ) : (
        <InView threshold={0.25}>
          {({ ref, inView }) => (
            <ProductDescription
              ref={ref}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.83 }}
            >
              <NewProduct>
                <p>NEW PRODUCT</p>
                <h1>
                  XX99 MARK II<br></br>HEADPHONE
                </h1>
                <h4>
                  Experience natural lifelike audio and exceptional built
                  quality, made for the passionate music enthusiast.
                </h4>

                <StyledSeeProduct>SEE PRODUCT</StyledSeeProduct>
              </NewProduct>
              <div>
                <img src={XX99} alt="headphones picture" />
              </div>
            </ProductDescription>
          )}
        </InView>
      )}

      <div>
        <ShopLinks />
      </div>
      <MiddleImages>
        <InView threshold={0.25}>
          {({ ref, inView }) => (
            <SpeakerImg
              ref={ref}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.83 }}
            >
              <img src={Speaker} alt="Speaker Image" />
              <Text>
                <h1>ZX9 SPEAKER</h1>
                <p>
                  Upgrade to premium speakers that are phenomenally built to
                  deliver truly remarkable sound.
                </p>
                <button>SEE PRODUCT</button>
              </Text>
            </SpeakerImg>
          )}
        </InView>

        <InView threshold={0.25}>
          {({ ref, inView }) => (
            <TableSpeaker
              ref={ref}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.83 }}
            >
              <h1>ZX7 SPEAKER</h1>
              <button>SEE PRODUCT</button>
              <img src={ZX7Speaker} />
            </TableSpeaker>
          )}
        </InView>

        <InView threshold={0.25}>
          {({ ref, inView }) => (
            <EarphonesProd
              ref={ref}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.83 }}
            >
              <div>
                <img src={Earphones} />
              </div>
              <EarphonesText>
                <h1>YX1 EARPHONES</h1>
                <button>SEE PRODUCT</button>
              </EarphonesText>
            </EarphonesProd>
          )}
        </InView>
      </MiddleImages>
    </Main>
  );
};
export default Home;
