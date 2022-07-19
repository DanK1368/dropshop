import styled from "styled-components";

export const Main = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const ProductDescription = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 70px;
  color: white;
  position: relative;

  img {
    background-color: black;
  }
`;
export const NewProduct = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  padding: 30px 50px;
  position: absolute;

  p {
    font-size: 13px;
    margin-bottom: 10%;
    color: lightgray;
  }

  h4 {
    font-weight: lighter;
  }
`;

export const MiddleImages = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SpeakerImg = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  color: white;
  background-color: #d87d4a;
  border-radius: 5px;

  img {
    position: relative;
    margin-bottom: -125px;
    margin-top: 30px;
  }
`;
export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    font-size: 15px;
  }

  button {
    width: 20%;
    height: 10%;
    font-size: 10px;
    background-color: black;
    color: white;
    border: none;
  }
`;
export const TableSpeaker = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 40px;
  img {
    border-radius: 5px;
  }
  h1 {
    position: absolute;
    padding: 5%;
    font-weight: bold;
  }
  button {
    position: absolute;
    width: 9%;
    height: 5%;
    margin: 10% 5%;
    font-size: 10px;
    background: none;
    border: 1px solid black;
  }
`;
export const EarphonesProd = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 40px;
  margin-bottom: 100px;
  gap: 30px;

  img {
    border-radius: 5px;
  }
  button {
    width: 27%;
    height: 13%;
    font-size: 10px;
    background: none;
    border: 1px solid black;
  }
`;
export const EarphonesText = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  background: #f1f1f1;
  padding-left: 50px;
  border-radius: 5px;
`;
