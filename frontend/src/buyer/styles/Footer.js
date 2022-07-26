import styled from "styled-components";

export const Main = styled.div`
  height: 100%;
  width: 100%;
  background-color: #000000;
  color: white;
`;

export const MiniHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  b {
    padding-left: 1rem;
  }
`;

export const Links = styled.div`
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  a {
    font-size: 12px;
    text-decoration: none;
    color: white;

    &:hover {
      color: #d87d4a;
    }
  }
`;
export const Bottom = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ShopText = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 1rem;

  p {
    font-size: 14px;
    color: grey;
    padding-bottom: 5px;
  }
`;

export const SocialIcons = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 20px;
`;
export const Social = styled.div`
  padding: 5px;
`;
