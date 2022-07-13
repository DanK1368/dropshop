import styled from "styled-components";
import { StyledCard } from "../../../../styles/SingleItem";
import Draggable from "react-draggable";

const SingleItem = () => {
  return (
    <Draggable> 
      <StyledCard>
        <h2>Headphones PX5000</h2>
        <div>
          <p>Price: $300</p>
          <p>Stock: 5 </p>
        </div>
      </StyledCard>
    </Draggable>   
  );
};
export default SingleItem;
