import React from "react";
import Child from "./Child.js";
import { useState } from "react";
const Parent = () => {
  const arr = [
    { task1: "Learn React", status: false },
    { task2: "Build a  React App", status: false },
    { task3: "deploy the React App", status: false },
  ];

  const [status, setStatus] = useState(arr);
  return (
    <div>
      <h1>Parent Component</h1>

      <Child status={status} setStatus={setStatus} />
    </div>
  );
};

export default Parent;
