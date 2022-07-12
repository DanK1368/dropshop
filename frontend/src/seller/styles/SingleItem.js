import styled from "styled-components";

export const StyledCard = styled.article`
  background: #20212c;
  width: 280px;
  border-radius: 5px;
  color: white;
  padding: 0.2rem;
  box-shadow: 0 2px 15px rgba(255, 255, 255, 0.3);

  h2 {
    text-align: center;
    font-weight: 400;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }
`;
