import React, { useState } from "react";
import { StyledHeader, AddButton } from "../../styles/Header";
import AddItem from "../../components/BoardLayout/DisplayBoard/Items/AddItem";
import AddColumn from "../../components/BoardLayout/DisplayBoard/Items/AddColumn";

const Header = () => {
  const [showAddNewItem, setShowAddNewItem] = useState(false);
  const [showAddNewColumn, setShowAddNewColumn] = useState(false);

  const handleShowAddNewItem = () => setShowAddNewItem(!showAddNewItem);
  const handleShowAddNewColumn = () => setShowAddNewColumn(!showAddNewColumn);

  return (
    <>
      <StyledHeader>
        <div>
          <h2>dropshop</h2>
          <p>Dashboard</p>
        </div>
        <div>
          <AddButton onClick={handleShowAddNewItem}>
            {showAddNewItem ? "Cancel" : "+Add New Item"}
          </AddButton>
          <AddButton onClick={handleShowAddNewColumn}>
            {showAddNewColumn ? "Cancel" : "+Add New Column"}
          </AddButton>
        </div>
      </StyledHeader>
      {showAddNewItem && <AddItem />}
      {showAddNewColumn && <AddColumn />}
    </>
  );
};

export default Header;
