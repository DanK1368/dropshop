import styled from "styled-components";

const StyledOuterContainer = styled.div`
  background: rgba(0, 0, 0, 0.1);
  min-height: 100vh;
  width: 90%;
  margin: 0 auto;
  margin-block: 3rem;
`;

const ProductDetails = () => {
  return (
    <section>
      <div style={{ minHeight: "10vh", background: "black" }}></div>
      <StyledOuterContainer>
        {/* Button Container */}
        <div>
          <button>Go Back</button>
        </div>
        {/* Container with Picture and details about product */}
        <div>
          <div></div>
          <div></div>
        </div>
        {/* Features Container and items inside the box */}
        <div></div>
        {/* Picture Gallery */}
      </StyledOuterContainer>
    </section>
  );
};
export default ProductDetails;
