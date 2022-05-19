import React from "react";

export default function MainDetails({ name, address }) {
  return (
    <>
      {/* your details */}
      <section className="flex flex-col items-end justify-end">
        {/* <input
            type="text"
            nmae="text"
            id="text"
            placeholder="Enter Your name"
            required
          /> */}
        <h2 className="font-bold text-xl uppercase md:text-4xl">{name}</h2>
        <p>{address} </p>
      </section>
      {/* end of your details */}
    </>
  );
}
