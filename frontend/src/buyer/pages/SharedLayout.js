import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { StyledOuterContainer } from "./ProductDetails";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <StyledOuterContainer>
        <Outlet />
      </StyledOuterContainer>
      <Footer />
    </>
  );
};
export default SharedLayout;
