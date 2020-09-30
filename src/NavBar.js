import React,{useState} from "react";
import Select from 'react-select';

import "./styles.css";
function NavBar() {
  function scrollTop() {
    window.scrollTo(0, 0);
  }
  function scrollProfile() {
    window.scrollTo(0, 267);
  }
  function scrollProject(){
    window.scrollTo(0,1380);
  }
  function scrollLargeProject(){
    window.scrollTo(0,1040);
  }
  function scrollDonate(){
    window.scrollTo(0,2120)
  }
  function scrollLargeDonate(){
    window.scrollTo(0,1780)
  }
  const data = [
    {
      value: 1,
      label: "Home"
    },
    {
      value: 2,
      label: "Profile"
    },
    {
      value: 3,
      label: "Projects"
    },
    {
      value:4,
      label:"Donate"
    }
  ];
 
  const [selectedOption, setSelectedOption] = useState(null);
 
  // handle onChange event of the dropdown
  const handleChange = e => {
    setSelectedOption(e);

    if (e.label === "Home"){
      scrollTop()
    }
    if (e.label === "Profile"){
      scrollProfile()
    }
    if (e.label === "Projects"){
      scrollProject()
    }
    if (e.label === "Donate"){
      scrollDonate()
    }
  }
  return (
    
    <div className=" flex justify-between bg-gray-500 rounded w-full fixed">
      <div className="flex justify-between bg-gray-500 rounded-lg">
        <img
          src="https://pbs.twimg.com/media/Ei7jKyVUcAA3CFZ?format=jpg&name=small"
          alt="K"
          className="rounded-full h-16 w-16 m-1 flex items-center justify-center"
        ></img>
        <div className="m-1 mt-3 p-2 float-right  text-lg font-semibold">
          Kunal Makwana
        </div>
      </div>
      <div className="p-3">
        <div className="dropdown relative xsm:block hidden">
        <Select className = "w-24"
        placeholder="Menu"
        value={selectedOption} // set selected value
        options={data} // set list of the data
        onChange={handleChange} // assign onChange function
      />
        </div>
        <div>
          <button
            className="bg-blue-500 xsm:hidden hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-900 rounded mr-3"
            onClick={scrollTop}
          >
            Home
          </button>
          <button
            className="bg-blue-500 xsm:hidden hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-900 rounded mr-3"
            onClick={scrollProfile}
          >
            Profile
          </button>
          <button
            className="bg-blue-500 xsm:hidden hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-900 rounded mr-3"
            onClick={scrollLargeProject}
          >
            Profile
          </button>
          <button
            className="bg-blue-500 xsm:hidden hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-900 rounded mr-3"
            onClick={scrollLargeDonate}
          >
            Donate
          </button>
        </div>
      </div>
    </div>
  );
}
export default NavBar;
