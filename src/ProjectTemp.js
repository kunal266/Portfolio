import React from "react";
const ProjectTemp = (props) => {
  console.log(props);
  return (
    <div className="bg-gray-900 pb-10 pt- overflow-hidden">
      {/* <div className "w-1/4">  </div> */}
      <div className="mx-auto ">
        <a
          href={props.projectLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className=" bg-blue-200 w-2/4 xsm:w-4/5 rounded-md mx-auto block mt-2 p-2 hover:bg-blue-400"
            href="https://img.icons8.com/ios/100/000000/circled-e.png"
          >
            <img
              src={props.icon}
              alt="Company Logo"
              className="mx-auto h-40 w-40  rounded-full border-2 border-orange-500 fill-color"
            ></img>
            <div className=" flex justify-around">
              {props.projectName}
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};
export default ProjectTemp;
