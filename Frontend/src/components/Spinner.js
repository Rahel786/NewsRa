import React from "react";
import "./spinner.css";

const Spinner = ({ mode }) => {
  return (
    <div
      className="loadingio-spinner-spinner-2by998twmg8"
      style={{
        "--spinner-color": mode === "light" ? "#1e1e2f" : "#f5f5f5",
      }}
    >
      <div className="ldio-yzaezf3dcmj">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i}></div>
        ))}
      </div>
    </div>
  );
};

export default Spinner;
