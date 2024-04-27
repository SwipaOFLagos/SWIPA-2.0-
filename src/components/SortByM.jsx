import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const SortByM = (currentProducts) => {
    const sortDataAZ = (data) => {
        data.sort((a, b) => {
          // Use localeCompare for string comparison
          return b.name.localeCompare(a.name);
          console.log('Z-A SORT');
        });
      };
      const sortDataZA = (data) => {
        return currentProducts.slice().sort((a, b) => b.localeCompare(a));
      };    
  return (
    <>
      <DropdownButton id="dropdown-item-button" title="Alphabetically, A-Z">
        <Dropdown.Item as="button" onClick={sortDataAZ}>
          Alphabetically, A-Z
        </Dropdown.Item>
        <Dropdown.Item as="button" onClick={sortDataZA}>
          Alphabetically, Z-A
        </Dropdown.Item>
        <Dropdown.Item as="button">Price, low to high</Dropdown.Item>
        <Dropdown.Item as="button">Price, high to low</Dropdown.Item>
      </DropdownButton>
    </>
  );
};

export default SortByM;
