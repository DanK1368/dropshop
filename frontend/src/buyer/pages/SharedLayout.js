import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { StyledOuterContainer } from "./ProductDetails";
import BottomPicture from "../components/BottomPicture";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <StyledOuterContainer>
        <Outlet />
        <BottomPicture />
      </StyledOuterContainer>
      <Footer />
    </>
  );
};
export default SharedLayout;
