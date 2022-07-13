import React, { useState } from "react";
import { StyledHeader, AddButton } from "../../styles/Header";
import AddItem from "../../components/BoardLayout/DisplayBoard/Items/AddItem";

const Header = () => {
  const [showAddNewItem, setShowAddNewItem] = useState(false);

  const handleShowAddNewItem = () => setShowAddNewItem(!showAddNewItem);

  return (
    <>
      <StyledHeader>
        <h3>Platform Launch</h3>
        <AddButton onClick={handleShowAddNewItem}>
          {showAddNewItem ? "Cancel" : "+Add New Item"}
        </AddButton>
      </StyledHeader>
      {showAddNewItem && <AddItem />}
    </>
  );
};

export default Header;
