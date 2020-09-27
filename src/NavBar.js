import React from "react";
import "./styles.css";
function NavBar() {
  function scrollTop() {
    window.scrollTo(0, 0);
  }
  function scrollProfile(){
    window.scrollTo(0,462)
  }
  return (
    <div className=" flex justify-between bg-gray-500 rounded w-full fixed">
      <div className="flex justify-between bg-gray-500 rounded-lg">
        <img
          src="https://pbs.twimg.com/media/Ei7jKyVUcAA3CFZ?format=jpg&name=small"
          alt="K"
          className="rounded-full h-16 w-16 flex items-center justify-center"
        ></img>
        <div className="m-1 mt-3 p-2 float-right  text-lg font-semibold">
          Kunal Makwana
        </div>
      </div>
      <div className="p-3">
        <div class="dropdown relative xsm:block hidden">
          <button class="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
            <span class="mr-1">Menu</span>
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
              ~
            </svg>
          </button>
          <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
            <li>
              <button className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap w-24" onClick = {scrollTop}>
                Home
              </button>
              </li>
              <li>
                <button className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap w-24" onClick = {scrollProfile}>                 Profile
                </button>
              </li>
              <li>
                <button
                  className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap w-24"
                  href="#"
                >
                  Projects
                </button>
              </li>
          </ul>
        </div>
        <div>
          <button className="bg-blue xsm:hidden hover:bg-blue-dark text-white font-bold py-2 px-4 border border-blue-darker rounded mr-3"onClick = {scrollTop}>
            Home
          </button>
          <button className="bg-blue xsm:hidden hover:bg-blue-dark text-white font-bold py-2 px-4 border border-blue-darker rounded mr-3" onClick = {scrollProfile}>
            Profile
          </button>
          <button className="bg-blue xsm:hidden hover:bg-blue-dark text-white font-bold py-2 px-4 border border-blue-darker rounded">
            Projects
          </button>
        </div>
      </div>
    </div>
  );
}
export default NavBar;
