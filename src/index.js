import React from "react";
import ReactDOM from "react-dom";

//If you want to add a variable/js expressions you have to put {} around the variable/js expressions
const fName = "Kamal";
const lName = "Mistry";
const luckyNumber = 9;

ReactDOM.render(
  <div>
    <h1>Hello {`${fName} ${lName}`}</h1>
    <p>Your lucky number is {luckyNumber}</p>
  </div>,
  document.getElementById("root")
);
