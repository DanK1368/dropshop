import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledWholeItem = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: ${({ layout }) => layout || "row"};
  margin-bottom: 10%;

  img {
    max-width: 300px;
    object-fit: cover;
    border-radius: 10px;
    background: #f1f1f1;
    padding-top: 20px;
  }
`;

export const StyledDescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledInnerDescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 75%;

  h2 {
    text-transform: uppercase;
  }
`;
