import React from "react";

export default function Notes({ notes }) {
  return (
    <>
      {/* notes */}
      <section className="mt-10 mb-5">
        {/* Textarea */}
        <p className="lg:w-1/2 text-justify">{notes}</p>
      </section>
      {/* end of notes */}
    </>
  );
}
