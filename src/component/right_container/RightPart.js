import React from "react";
import { Outlet } from "react-router-dom";

const RightPart = () => {
  return (
    <div className="rightpart">
     <Outlet></Outlet>
    </div>
  );
};

export default RightPart;
