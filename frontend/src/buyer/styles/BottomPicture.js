import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  font-size: 13px;
  margin-top: 2rem;

  img {
    /* width: 288px;
    height: 300px; */
    max-width: 500px;
    border-radius: 5px;
    object-fit: cover;
  }
`;

export const LeftText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem;
  line-height: 2em;
  flex: 1;

  h3 {
    font-size: 50px;
    line-height: 1.2;
    width: 100%;
  }

  p {
    font-size: 16px;
  }

  span {
    color: #d87d4a;
  }
`;
