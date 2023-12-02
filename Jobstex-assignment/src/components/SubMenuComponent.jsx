/* eslint-disable react/prop-types */

import SubActionTypesComponent from "./SubActionTypesComponent";

function SubMenuComponent({ subMenuData }) {
    
  return (
    <>
    <div className="dropdown">
      <hr className="my-3" />
      {subMenuData.map((subMenu) => (
        <div key={subMenu.id} className="flex justify-between my-4">
          <div>
            <label htmlFor={subMenu.userRightsSubMenuData.subMenuName} className="font-medium">{subMenu.userRightsSubMenuData.subMenuName}</label> 
          {/* <input type="checkbox" id={subMenu.userRightsSubMenuData.subMenuName} /> Your checkbox for each submenu */}
          </div>
          <div className="p-2 flex items-center">
          <SubActionTypesComponent subActionType={subMenu.subActionType} />
          </div>
        </div>
      ))}
    </div>
    </>
  )
}

export default SubMenuComponent