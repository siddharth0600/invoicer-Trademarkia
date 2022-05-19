import React from "react";

export default function Dates() {
  return (
    <>
      {/* Dates */}
      <article className="my-5 flex flex items-end justify-end">
        <ul>
          <li>
            <span className="font-bold">Invoice Number</span>
          </li>
          <li>
            <span className="font-bold">Invoice date:</span>
          </li>
          <li>
            <span className="font-bold">Due Date:</span>
          </li>
        </ul>
      </article>
    </>
  );
}
