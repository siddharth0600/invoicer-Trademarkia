import React from "react";

export default function ClientDetails({ clientName, clientAddress }) {
  return (
    <>
      {/* Client details */}
      <section className="mt-5">
        <h2 className="text-xl uppercase">{clientName}</h2>
        <p>{clientAddress}</p>
      </section>
      {/* End of client details */}
    </>
  );
}
