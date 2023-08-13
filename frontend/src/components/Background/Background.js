import React from "react";
import "./Background.css";

function Background({ children }) {
  return (
    <div className="screen">
      <div className="background">{children}</div>
    </div>
  );
}

export default Background;