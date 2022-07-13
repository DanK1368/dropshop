import styled from "styled-components";
import { StyledCard } from "../../../../styles/SingleItem";
import { useDrag } from "react-dnd";
import { useState } from "react";
import { TiDelete } from "react-icons/ti";
import DeleteItem from "../../../../components/BoardLayout/DisplayBoard/Items/DeleteItem";

const SingleItem = ({ id, name, price, stock, showDeleteButton }) => {
  const [showWarning, setShowWarning] = useState(false);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "productItem",
    item: {
      id: id,
    },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <>
      <StyledCard ref={drag}>
        {showDeleteButton && (
          <button onClick={() => setShowWarning(!showWarning)}>
            <TiDelete size={25} color="#EA5555" />
          </button>
        )}
        <h2>{name}</h2>
        <div>
          <p>Price: $ {price}</p>
          <p>Stock: {stock} </p>
        </div>
      </StyledCard>
      {showWarning && (
        <DeleteItem
          showWarning={showWarning}
          setShowWarning={setShowWarning}
          productId={id}
        />
      )}
    </>
  );
};
export default SingleItem;
