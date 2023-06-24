import React, { useState, useEffect } from "react";
import Values from "values.js";
import SingleColor from "./SingleColor";
import { v4 as uuidv4 } from "uuid";

const ColorGrading = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("inviato");
  }

  const handleChange = (e) => {
    console.log(e.target);
  }

  return (
  <>
      <form classname="form" onsubmit={handleSubmit}>
        <div className="input-group">
          
          <input
           type="text"
           name="color"
           id="color"
           value="0"
           maxLength={7}
           onChange={handleChange}
           className="input"
          ></input>

          <input
           type="text"
           name="color"
           id="color"
           value="0"
           maxLength={7}
           onChange={handleChange}
           className="input"
          ></input>

        </div>
        <button className="btn btn-selector" type="submit">
          Create
        </button>
      </form>
      </>
  );
};

export default ColorGrading; 
