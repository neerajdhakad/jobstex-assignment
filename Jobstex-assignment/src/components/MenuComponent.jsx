/* eslint-disable react/prop-types */
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

import SubMenuComponent from "./SubMenuComponent";

function MenuComponent({ menuData }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="bg-white rounded-md shadow-md p-3 my-3 md:w-1/2 w-full">
        <input type="checkbox" id={menuData.userRightsMenuData.menuName} />
        <label
          htmlFor={menuData.userRightsMenuData.menuName}
          className="inline-block font-medium"
        >
          &nbsp; {menuData.userRightsMenuData.menuName}
        </label>
        <span className="inline-block">
          <button onClick={toggleDropdown}>
            &nbsp; <FontAwesomeIcon icon={faCaretDown} beat />{" "}
          </button>
        </span>
        {isDropdownOpen && (
          <SubMenuComponent subMenuData={menuData.subMenuData} />
        )}
      </div>
    </>
  );
}

export default MenuComponent;
