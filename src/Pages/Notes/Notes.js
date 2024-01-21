import React from "react";

const Notes = () => {
  return (
    <>
      <section className="notes-section">
        <div className="notes">
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Trials on ticket
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Chat-Follow up team agent , Called Customer on ...... for{" "}
                  <code>nth</code> trial but no answer from his side, SMS sent
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Problem related to the ticket is solved
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <b>Physical Cases: </b>
                  Chat-Follow up team agent, Called Customer on ........ to
                  follow up on his issue , Customer informed us that his issue
                  is solved and his line is working fine already until now. <br />

                  <b>Logical Cases: </b>
                  Chat-Follow up team agent, Called Customer on ........ to
                  follow up on his issue , Customer informed us that his issue
                  is solved and his line is working fine already until now and customer accepted to close this ticket.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Problem related to the ticket is still exist
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Chat-Follow up team agent, Called Customer on ........ to
                  follow up on his issue , Customer informed us that his issue
                  is still exist and not solved , so we followed up with him as
                  following ,............
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseFour"
                >
                  All Available required DNS values
                </button>
              </h2>
              <div
                id="flush-collapseFour"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <b>WE DNS:</b> 163.121.128.134,163.121.128.135 ; <br />
                  <b>Google DNS:</b> 8.8.8.8,8.8.4.4 ; <br /> <b>Open DNS: </b>
                  208.67.222.222,208.67.220.220 ; <br /> <b>CloudFlare DNS: </b>
                  1.1.1.1,1.0.0.1. <br /> <b>DYN DNS: </b>
                  216.146.35.35,216.146.36.36 <br /> <b>Quad9: </b>
                  9.9.9.9,149.112.112.112 <br /> <b>Green Team: </b>
                  81.218.119.11,209.88.198.133 <br /> <b>Verisign: </b>
                  64.6.64.6,64.6.65.6 <br />
                  <b>Alternate DNS: </b>76.76.19.19,76.223.122.150
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFive"
                  aria-expanded="false"
                  aria-controls="flush-collapseFive"
                >
                  All Available required MTU values
                </button>
              </h2>
              <div
                id="flush-collapseFive"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <b>MTU</b>: 1380, 1400, 1408, <mark>1420</mark> , 1428,{" "}
                  <mark>1460</mark> , 1480, <mark>1492</mark>.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Notes;
