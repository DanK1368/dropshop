import { StyledCard } from "../../../../styles/SingleItem";
import { useDrag } from "react-dnd";
import { TiDelete } from "react-icons/ti";
import DeleteItem from "../../../../components/BoardLayout/DisplayBoard/Items/DeleteItem";
import { useDispatch, useSelector } from "react-redux";
import { TOGGLE_WARNING_MESSAGE } from "../../../../../redux/productSlice";

const SingleItem = ({ id, name, price, stock, showDeleteButton }) => {
  const { showWarning } = useSelector(state => state.product);
  const dispatch = useDispatch();

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
          <button onClick={() => dispatch(TOGGLE_WARNING_MESSAGE())}>
            <TiDelete size={25} color="#EA5555" />
          </button>
        )}
        <h2>{name}</h2>
        <div>
          <p>Price: $ {price}</p>
          <p>Stock: {stock} </p>
        </div>
      </StyledCard>
      {showWarning && <DeleteItem showWarning={showWarning} productId={id} />}
    </>
  );
};
export default SingleItem;
