import React from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import { Main, PageLinks } from "../styles/Header";

// not forget to take a look at the border-bottom
const Header = () => {
  return (
    <Main>
      <div>
        <h2>
          <b>dropshop</b>
        </h2>
      </div>
      <PageLinks>
        <p>HOME</p>
        <p>HEADPHONES</p>
        <p>SPEAKERS</p>
        <p>EARPHONES</p>
      </PageLinks>
      <div>
        <RiShoppingCartLine />
      </div>
    </Main>
  );
};
export default Header;
