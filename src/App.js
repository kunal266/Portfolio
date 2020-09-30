import React, { Fragment } from "react";
// import logo from "./logo.svg";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import Projects from "./Projects";
import Donation from "./donation";

function App() {
  return (
    <Fragment>
      <NavBar></NavBar>
      <HomePage></HomePage>
      {/* <HomePage></HomePage> */}
      <Projects></Projects>
      <Donation/>
    </Fragment>
  );
}

export default App;
