import React from "react";
import LeftPart from "../left_container/LeftPart";
import RightPart from "../right_container/RightPart";
import "./layout.css";
const Layout = () => {
  return (
    <div className="container">
      <LeftPart></LeftPart>
      <RightPart></RightPart>
    </div>
  );
};

export default Layout;
