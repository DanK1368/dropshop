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
import { useSelector } from "react-redux";

const Home = () => {
  const { featuredItems } = useSelector(state => state.product);

  console.log(featuredItems);

  return (
    <Main>
      {featuredItems.length > 0 ? (
        featuredItems.map(item => (
          <StyledFeaturedProduct>
            <div>
              <p>NEW PRODUCT</p>
              <h1>{item.name}</h1>
              <h4>{item.descriotion}</h4>

              <StyledSeeProduct>SEE PRODUCT</StyledSeeProduct>
            </div>
            <div>
              <img src={item.image} alt="headphones picture" />
            </div>
          </StyledFeaturedProduct>
        ))
      ) : (
        <ProductDescription>
          <NewProduct>
            <p>NEW PRODUCT</p>
            <h1>
              XX99 MARK II<br></br>HEADPHONE
            </h1>
            <h4>
              Experience natural lifelike audio and exceptional built quality,
              made for the passionate music enthusiast.
            </h4>

            <StyledSeeProduct>SEE PRODUCT</StyledSeeProduct>
          </NewProduct>
          <div>
            <img src={XX99} alt="headphones picture" />
          </div>
        </ProductDescription>
      )}

      <div>
        <ShopLinks />
      </div>
      <MiddleImages>
        <SpeakerImg>
          <img src={Speaker} alt="Speaker Image" />
          <Text>
            <h1>ZX9 SPEAKER</h1>
            <p>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <button>SEE PRODUCT</button>
          </Text>
        </SpeakerImg>
        <TableSpeaker>
          <h1>ZX7 SPEAKER</h1>
          <button>SEE PRODUCT</button>
          <img src={ZX7Speaker} />
        </TableSpeaker>
        <EarphonesProd>
          <div>
            <img src={Earphones} />
          </div>
          <EarphonesText>
            <h1>YX1 EARPHONES</h1>
            <button>SEE PRODUCT</button>
          </EarphonesText>
        </EarphonesProd>
      </MiddleImages>
    </Main>
  );
};
export default Home;
