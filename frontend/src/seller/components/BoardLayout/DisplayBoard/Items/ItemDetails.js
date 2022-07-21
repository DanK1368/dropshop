import { useEffect, useState, useRef } from "react";
import {
  StyledBackdrop,
  StyledContainer,
  StyledForm,
  StyledGrid,
  StyledInputContainer,
  StyledButton,
} from "../../../../styles/ItemDetails";
import { TOGGLE_SHOW_ITEM_DETAILS } from "../../../../../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { updateItem } from "../../../../../redux/productApiCalls";

const ItemDetails = ({ id }) => {
  const ref = useRef();
  const dispatch = useDispatch();
  const { itemInventory } = useSelector(store => store.product);
  const itemTobeUpdated = itemInventory.filter(item => item.id === id);

  const [itemValues, setItemValues] = useState({
    name: itemTobeUpdated[0].name,
    price: itemTobeUpdated[0].price,
    description: itemTobeUpdated[0].description,
    features: itemTobeUpdated[0].features,
    box_items: itemTobeUpdated[0].box_items,
    category: itemTobeUpdated[0].category,
    stock: itemTobeUpdated[0].stock,
    column_name: itemTobeUpdated[0].column_name,
  });

  const handleUpdate = e => {
    e.preventDefault();
    updateItem(id, itemValues, dispatch);
  };

  // Function to close the item details modal when we click outside of the container
  useOnClickOutside(ref, () => dispatch(TOGGLE_SHOW_ITEM_DETAILS()));

  return (
    <StyledBackdrop>
      <StyledContainer ref={ref}>
        <StyledForm onSubmit={handleUpdate}>
          <h1>Update Item</h1>

          <StyledGrid>
            <StyledInputContainer>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={itemValues.name}
                onChange={e =>
                  setItemValues(prevState => {
                    return { ...prevState, [e.target.name]: e.target.value };
                  })
                }
              />
            </StyledInputContainer>
            <StyledInputContainer>
              <label htmlFor="price">Price</label>
              <input
                type="text"
                name="price"
                id="price"
                value={itemValues.price}
                onChange={e =>
                  setItemValues(prevState => {
                    return { ...prevState, [e.target.name]: e.target.value };
                  })
                }
              />
            </StyledInputContainer>
            <StyledInputContainer>
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                value={itemValues.description}
                onChange={e =>
                  setItemValues(prevState => {
                    return { ...prevState, [e.target.name]: e.target.value };
                  })
                }
                id="description"
                cols="30"
                rows="10"
              ></textarea>
            </StyledInputContainer>
            <StyledInputContainer>
              <label htmlFor="features">Features</label>
              <input
                type="text"
                id="features"
                name="features"
                value={itemValues.features}
                onChange={e =>
                  setItemValues(prevState => {
                    return { ...prevState, [e.target.name]: e.target.value };
                  })
                }
              />
            </StyledInputContainer>
            <StyledInputContainer>
              <label htmlFor="boxItems">Items Contained In The Box</label>
              <input
                type="text"
                name="box_items"
                id="box_items"
                value={itemValues.box_items}
                onChange={e =>
                  setItemValues(prevState => {
                    return { ...prevState, [e.target.name]: e.target.value };
                  })
                }
              />
            </StyledInputContainer>
            <StyledInputContainer>
              <label htmlFor="image">Category</label>
              <input
                type="text"
                name="category"
                id="category"
                value={itemValues.category}
                onChange={e =>
                  setItemValues(prevState => {
                    return { ...prevState, [e.target.name]: e.target.value };
                  })
                }
              />
            </StyledInputContainer>
            <StyledInputContainer>
              <label htmlFor="image">Stock</label>
              <input
                type="text"
                name="stock"
                id="stock"
                value={itemValues.stock}
                onChange={e =>
                  setItemValues(prevState => {
                    return { ...prevState, [e.target.name]: e.target.value };
                  })
                }
              />
            </StyledInputContainer>
            <StyledInputContainer>
              <label htmlFor="column_name">Column</label>
              <input
                type="text"
                name="column_name"
                id="column_name"
                value={itemValues.column_name}
                onChange={e =>
                  setItemValues(prevState => {
                    return { ...prevState, [e.target.name]: e.target.value };
                  })
                }
              />
            </StyledInputContainer>
          </StyledGrid>

          <StyledButton>Update Item</StyledButton>
        </StyledForm>
      </StyledContainer>
    </StyledBackdrop>
  );
};
export default ItemDetails;

// Hook --> this will close the PopUp when we click outside
function useOnClickOutside(ref, handler) {
  useEffect(
    () => {
      const listener = event => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }

        handler(event);
      };

      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);

      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]
  );
}
