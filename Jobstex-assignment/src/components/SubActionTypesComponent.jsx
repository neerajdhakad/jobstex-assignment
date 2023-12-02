/* eslint-disable react/prop-types */
import { useState } from "react";

function SubActionTypesComponent({ subActionType }) {
  const actionTypes = subActionType.split(',');
  const [selectedActionTypes, setSelectedActionTypes] = useState([]);

  const handleCheckboxChange = (actionType) => { 
    if (selectedActionTypes.includes(actionType)) {
      setSelectedActionTypes(selectedActionTypes.filter((type) => type !== actionType));
    } else {
      setSelectedActionTypes([...selectedActionTypes, actionType]);
    }
  };

  const handleSelectAll = () => { 
    if (selectedActionTypes.length === actionTypes.length) { 
      setSelectedActionTypes([]);
    } else { 
      setSelectedActionTypes([...actionTypes]);
    }
  };

  return (
    <>
      <div className="mx-5 ">
        <input
          type="checkbox"
          checked={selectedActionTypes.length === actionTypes.length}
          id="selectAll"
          onChange={handleSelectAll}
        /> 
      </div>
       
        {actionTypes.map((actionType, index) => (
          <div key={index} className="flex text-center justify-center">  
            <input
              className="inline"
              type="checkbox"
              id={actionType.trim()}
              checked={selectedActionTypes.includes(actionType)}
              onChange={() => handleCheckboxChange(actionType)}
              /> 
            <label className="mx-1 inline">{actionType.trim()} </label>
             
          </div>
        ))}
       
    </>
  );
}

export default SubActionTypesComponent;
