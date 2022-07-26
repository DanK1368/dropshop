import React from "react";
import { Link } from "react-router-dom";
import {
  Main,
  MiniHeader,
  Links,
  Bottom,
  ShopText,
  SocialIcons,
  Social,
} from "../styles/Footer";
import { ImFacebook2, ImTwitter } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";

// still need to be added links to all other pages and social
const Footer = () => {
  return (
    <Main>
      <MiniHeader>
        <div>
          <h2>
            <b>dropshop</b>
          </h2>
        </div>
        <Links>
          <Link to="/">HOME</Link>
          <Link to="/category-headphones">HEADPHONES</Link>
          <Link to="/category-speakers">SPEAKERS</Link>
          <Link to="/category-earphones">EARPHONES</Link>
        </Links>
      </MiniHeader>
      <Bottom>
        <ShopText>
          <p>
            Dropshop is an all in one stop to fulfill your audio needs. We're a
            small team of music lovers and sound specialists who are devoted to
            helping you get the most out of personal audio. Come and visit our
            demo facility - we are open 7 days a week.
          </p>
          <br></br>
          <p>Copyright 2022. All Rights Reserved</p>
        </ShopText>
        <SocialIcons>
          <Social>
            <ImFacebook2 />
          </Social>
          <Social>
            <ImTwitter />
          </Social>
          <Social>
            <BsInstagram />
          </Social>
        </SocialIcons>
      </Bottom>
    </Main>
  );
};

export default Footer;
