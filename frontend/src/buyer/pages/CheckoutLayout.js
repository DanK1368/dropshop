import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { StyledOuterContainer } from "./ProductDetails";

const CheckoutLayout = () => {
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
export default CheckoutLayout;
