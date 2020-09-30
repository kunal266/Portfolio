import React,{useState,useEffect} from "react";
import "./styles.css";
import ReactMarkdown from 'react-markdown';
import kunalprofile from './MyProfile.md';
import Socialmedia from './Socialmedia';

export default function HomePage() {
  const [markdown,setmarkdown] = useState()

  useEffect(()=>{
    fetch(kunalprofile)
  .then((response) => response.text())
  .then((text) => {
    setmarkdown(text)
    // console.log(markdown)
  })
  })
  const input = `testing 1 1 1`
  return (
    
    <div >
      <div className="bg-gray-900  pt-20 ">
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
          <div className="text-yellow-500 text-center text-4xl">Profile</div>
          <div className="text-yellow-200 mx-auto w-3/4">
            <ReactMarkdown source={input}/>
            </div>
            <Socialmedia/>
          
        </div>
      </div>
    </div>
  );
}
