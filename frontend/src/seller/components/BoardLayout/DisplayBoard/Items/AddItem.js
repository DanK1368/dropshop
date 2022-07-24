import { useState } from "react";
import {
  StyledBackdrop,
  StyledContainer,
  StyledForm,
  StyledGrid,
  StyledInputContainer,
  StyledButton,
  StlyedHeaderContainer,
  StyledImagePreviewContainer,
} from "../../../../styles/AddItem";
import { createNewItem } from "../../../../../redux/productApiCalls";
import { useDispatch } from "react-redux";

const AddItem = () => {
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState("");
  const [itemValues, setItemValues] = useState({
    name: "",
    price: "",
    description: "",
    features: "",
    box_items: "",
    category: "",
    stock: "",
    column_name: "",
    image: "",
  });

  const handleCreateNewItem = e => {
    e.preventDefault();
    createNewItem(itemValues, dispatch);
  };

  const imageChange = e => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const removeSelectedImage = () => {
    setSelectedImage("");
  };

  const handleChangeOfItemValues = e => {
    setItemValues(prevState => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  return (
    <StyledBackdrop>
      <StyledContainer>
        <StyledForm onSubmit={handleCreateNewItem}>
          <StlyedHeaderContainer>
            <h1>Add New Item</h1>
            {selectedImage && (
              <StyledImagePreviewContainer>
                <img src={selectedImage} alt="item preview" />
                <button type="button" onClick={removeSelectedImage}>
                  Remove
                </button>
              </StyledImagePreviewContainer>
            )}
          </StlyedHeaderContainer>
          <StyledGrid>
            <StyledInputContainer>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={itemValues.name}
                onChange={handleChangeOfItemValues}
              />
            </StyledInputContainer>
            <StyledInputContainer>
              <label htmlFor="price">Price</label>
              <input
                type="text"
                name="price"
                id="price"
                value={itemValues.price}
                onChange={handleChangeOfItemValues}
              />
            </StyledInputContainer>
            <StyledInputContainer>
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                value={itemValues.description}
                onChange={handleChangeOfItemValues}
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
                onChange={handleChangeOfItemValues}
              />
            </StyledInputContainer>
            <StyledInputContainer>
              <label htmlFor="boxItems">Items Contained In The Box</label>
              <input
                type="text"
                name="box_items"
                id="box_items"
                value={itemValues.box_items}
                onChange={handleChangeOfItemValues}
              />
            </StyledInputContainer>
            <StyledInputContainer>
              <label htmlFor="image">Category</label>
              <input
                type="text"
                name="category"
                id="category"
                value={itemValues.category}
                onChange={handleChangeOfItemValues}
              />
            </StyledInputContainer>
            <StyledInputContainer>
              <label htmlFor="image">Stock</label>
              <input
                type="text"
                name="stock"
                id="stock"
                value={itemValues.stock}
                onChange={handleChangeOfItemValues}
              />
            </StyledInputContainer>
            <StyledInputContainer>
              <label htmlFor="column_name">Column</label>
              <input
                type="text"
                name="column_name"
                id="column_name"
                value={itemValues.column_name}
                onChange={handleChangeOfItemValues}
              />
            </StyledInputContainer>
            <StyledInputContainer>
              <label htmlFor="image">Image</label>
              <input
                type="file"
                name="image"
                id="image"
                onChange={e => {
                  imageChange(e);
                  setItemValues(prevState => {
                    return {
                      ...prevState,
                      [e.target.name]: e.target.files[0],
                    };
                  });
                }}
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
