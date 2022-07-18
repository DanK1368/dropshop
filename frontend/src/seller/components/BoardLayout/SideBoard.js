import React, { useState } from "react";
import AddColumn from "../../components/BoardLayout/DisplayBoard/Items/AddColumn";
import {
  StyledSideBar,
  StyledSideHeader,
  StyledSideBody,
  StyledSideMenu,
  StyledAddButton
} from "../../styles/SideBoard";

const SideBoard = () => {

  const [showAddNewColumn, setShowAddNewColumn] = useState(false);

  const handleShowAddNewColumn = () => setShowAddNewColumn(!showAddNewColumn);

  return (
    <>
      <StyledSideBar>
        <StyledSideHeader>
          <h1>DropShop</h1>
        </StyledSideHeader>
        <StyledSideBody>
          <StyledSideMenu>
            <StyledAddButton onClick={handleShowAddNewColumn}>
              {showAddNewColumn ? "Cancel" : "Create New Column"}
            </StyledAddButton>
          </StyledSideMenu>
        </StyledSideBody>
      </StyledSideBar>
      {showAddNewColumn && <AddColumn />}
    </>
  );
};

export default SideBoard;
