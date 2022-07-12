import React from 'react';
import AddItem from "./seller/components/BoardLayout/DisplayBoard/Items/AddItem";
import Header from './seller/components/BoardLayout/Header';
import SideBoard from './seller/components/BoardLayout/SideBoard';

function App() {
  return (
    <div className="App">
      <Header />
      <SideBoard />
      <AddItem />
    </div>
  );
}

export default App;
