import styled from "styled-components";

export const Main = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 13px;
  margin-top: 2rem;
  gap: 3rem;

  img {
    /* width: 288px;
    height: 300px; */
    width: clamp(400px, 100%, 700px);
    height: 100%;
    border-radius: 5px;
    object-fit: cover;
  }
`;

export const LeftText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 2em;

  h3 {
    font-size: 50px;
    line-height: 1.2;
    width: 100%;
  }

  p {
    font-size: 16px;
    max-width: 100ch;
  }

  span {
    color: #d87d4a;
  }
`;
