import React from "react";
import { rgbToHex } from "../utils/helpers";

const SingleColor = ({ rgb, type, weight }) => {
  console.log(...rgb);
  return (
    <article
      className={`single-color ${type}`}
      style={{
        backgroundColor: rgbToHex(...rgb)
      }}
    >
      {" "}
      {rgbToHex(...rgb)}
    </article >
  );
};

export default SingleColor;



