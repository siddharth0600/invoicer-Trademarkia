function App() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <main className="m-5 p-5 xl:max-w-4xl xl:mx-auto lg:max-w-xl lg:mx-auto bg-white rounded shadow">
        {/* Header */}
        <header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between">
          <div>
            <h1 className="font-bold uppercase tracking-wide text-4xl mb-3">
              Invoicer | Trademarkia
            </h1>
          </div>

          <div>
            <ul className="flex items-center justify-between flex-wrap">
              <li>
                <button onClick={handlePrint} className="btn btn-print">
                  Print
                </button>
              </li>
              <li>
                <button className="btn btn-download">Download</button>
              </li>
              <li>
                <button className="btn btn-send">Send</button>
              </li>
            </ul>
          </div>
        </header>
        {/* End of Header */}
        {/* your details */}
        <section className="flex flex-col items-end justify-end">
          {/* <input
            type="text"
            nmae="text"
            id="text"
            placeholder="Enter Your name"
            required
          /> */}
          <h2 className="text-xl uppercase">Siddharth Tripathi</h2>
          <p>Your Address </p>
        </section>
        {/* end of your details */}

        {/* Client details */}
        <section className="mt-5">
          <h2 className="text-xl uppercase">Client's name</h2>
          <p>Client's address</p>
        </section>
        {/* End of client details */}
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
        {/* table */}
        <div className="my-5">This is the table</div>
        {/* end of table */}
        {/* notes */}
        <section className="mb-5">
          {/* Textarea */}
          <p>Notes to the client....</p>
        </section>
        {/* end of notes */}

        {/* Footer */}
        <footer>
          <ul className="flex flex-wrap items-center justify-center">
            <li>
              <span className="font-bold">Your name:</span> Siddharth
            </li>
            <li>
              <span className="font-bold">Your email:</span> sid@gmail.com
            </li>
            <li>
              <span className="font-bold">Phone Number:</span> 839389283
            </li>
            <li>
              <span className="font-bold">Bank:</span> SBI
            </li>
            <li>
              <span className="font-bold">Account holder:</span> Sid
            </li>
            <li>
              <span className="font-bold">Account number:</span> 34324
            </li>
            <li>
              <span className="font-bold">Website:</span> www.sid.com
            </li>
          </ul>
        </footer>
        {/* End of footer */}
      </main>
    </>
  );
}

export default App;
