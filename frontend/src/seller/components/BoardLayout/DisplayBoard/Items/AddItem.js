import { useState } from "react";
import {
  StyledBackdrop,
  StyledContainer,
  StyledForm,
  StyledGrid,
  StyledInputContainer,
  StyledButton,
} from "../../../../styles/AddItem";
import { createNewItem } from "../../../../../redux/productApiCalls";
import { useDispatch } from "react-redux";

const AddItem = () => {
  const dispatch = useDispatch();
  const [itemValues, setItemValues] = useState({
    name: "",
    price: "",
    description: "",
    features: "",
    box_items: "",
    category: "",
    stock: "",
    column_name: "",
  });

  const handleCreateNewItem = e => {
    e.preventDefault();
    createNewItem(itemValues, dispatch);
  };

  return (
    <StyledBackdrop>
      <StyledContainer>
        <StyledForm onSubmit={handleCreateNewItem}>
          <h1>Add New Item</h1>

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

          <StyledButton>Create Item</StyledButton>
        </StyledForm>
      </StyledContainer>
    </StyledBackdrop>
  );
};
export default AddItem;
