import "./App.css";
import { useState, useEffect } from "react";
// import data from '../info.json'
import MenuComponent from "./components/MenuComponent";

function App() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../info.json");
        const jsonData = await response.json();
        setInfo(jsonData);
        console.log(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (info.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h2 className="text-4xl">Loading.......</h2>
      </div>
    );
  }

  return (
    <>
      <div className="  mt-5 mx-5">
        <input type="checkbox" name="permission" id="permission" />
        <label htmlFor="permission" className="text-blue-700">
          {" "}
          Give All Permission to accountant
        </label>

        <div className="flex flex-wrap mx-5 ">
          {info.map((data) => (
            <MenuComponent key={data.id} menuData={data} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
