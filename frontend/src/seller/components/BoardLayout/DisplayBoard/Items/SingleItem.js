import {
  StyledBtnContainer,
  StyledCard,
  StyledCardContainer,
  StyledDeleteBtn,
} from "../../../../styles/SingleItem";
import { useDrag } from "react-dnd";
import { TiDelete } from "react-icons/ti";
import DeleteItem from "../../../../components/BoardLayout/DisplayBoard/Items/DeleteItem";
import { useDispatch, useSelector } from "react-redux";
import {
  TOGGLE_SHOW_ITEM_DETAILS,
  TOGGLE_WARNING_MESSAGE,
} from "../../../../../redux/productSlice";
import { fetchFeaturedItem } from "../../../../../redux/productApiCalls.js";

const SingleItem = ({ id, name, price, stock, image }) => {
  const dispatch = useDispatch();

  const handleFetchFeaturedItem = () => {
    fetchFeaturedItem(id, dispatch);
  };
  const { showWarning } = useSelector(state => state.product);

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
      <StyledCardContainer>
        <StyledCard ref={drag}>
          <StyledDeleteBtn onClick={() => dispatch(TOGGLE_WARNING_MESSAGE(id))}>
            <TiDelete size={25} color="#EA5555" />
          </StyledDeleteBtn>
          <div>
            <img src={image} alt="" />
          </div>
          <h2>{name}</h2>
          <div>
            <p>Price: $ {price}</p>
            <p>Stock: {stock} </p>
          </div>

          <StyledBtnContainer>
            <button onClick={() => dispatch(TOGGLE_SHOW_ITEM_DETAILS(id))}>
              See Details
            </button>
            <button onClick={handleFetchFeaturedItem}>
              Mark Item As Featured
            </button>
          </StyledBtnContainer>
        </StyledCard>
      </StyledCardContainer>
    </>
  );
};
export default SingleItem;
