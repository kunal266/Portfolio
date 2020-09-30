import React from "react";
import "./styles.css";
import Socialmedia from './Socialmedia';
import Profile from "./profile";

export default function HomePage() {
  return (
    
    <div >
      <div className="bg-gray-900  pt-20 pb-10 ">
        <div className="justify-center flex pt-3">
          <img
            src="https://pbs.twimg.com/media/Ei7jKyVUcAA3CFZ?format=jpg&name=small"
            alt="K"
            className="rounded-full h-56 w-56 p-2 shadow-2xl"
          ></img>
        </div>
        <div className="text-teal-400 font-sans text-5xl pt-3 pb-16 xsm:pb-0 text-center ">
          Kunal Makwana
        </div>
        <Socialmedia value = "hidden"/>
        <div >
          <div className="text-yellow-500 text-center text-4xl mt-6">Profile</div>
          <div className="text-yellow-200 text-center mx-auto xsmm:w-3/4 ">
            <Profile/>
            </div>
            <Socialmedia/>
          
        </div>
      </div>
    </div>
  );
}
