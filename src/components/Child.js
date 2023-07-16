import React from "react";
const Child = (props) => {
  console.log(props);
  return (
    <div>
      <h3>Child Component</h3>
      <ul>
        <li>
          <span>{props.status[0].task1}</span>

          {!props.status[0].status && (
            <button
              onClick={(event) => {
                props.setStatus([
                  ...props.status,
                  (props.status[0].status = true),
                ]);
              }}
            >
              Completed
            </button>
          )}
        </li>
        <li>
          <span>{props.status[1].task2}</span>
          {!props.status[1].status && (
            <button
              onClick={() => {
                props.setStatus([
                  ...props.status,
                  (props.status[1].status = true),
                ]);
              }}
            >
              Completed
            </button>
          )}
        </li>
        <li>
          <span>{props.status[2].task3}</span>
          {!props.status[2].status && (
            <button
              onClick={() => {
                props.setStatus([
                  ...props.status,
                  (props.status[2].status = true),
                ]);
              }}
            >
              Completed
            </button>
          )}
        </li>
      </ul>
    </div>
  );
};
export default Child;
