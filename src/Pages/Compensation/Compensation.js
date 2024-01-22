import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Compensation.css";

const Compensation = () => {
  const [gbValue, setGbValue] = useState("");
  const [isReset, setIsReset] = useState(false);

  const handleGbChange = (event) => {
    if (isReset) {
      setGbValue("");
      setIsReset(false);
    }
    const value = event.target.value;
    setGbValue(value);
  };

  const handleReset = () => {
    setGbValue("");
    setIsReset(true);
  };

  const bytesValue = parseFloat(gbValue) * 1073741824;

  return (
    <>
      <main className="compensation-section">
        <section className="generator-head-sec">
          <label for="exampleFormControlInput1" class="form-label">
            Write here in Gigabytes
          </label>
          <input
            type="text"
            id="gb-input exampleFormControlInput1"
            value={gbValue}
            onChange={handleGbChange}
            class="form-control"
            placeholder="GigaBytes"
          />
          <label for="inputPassword5" class="form-label">
            Result in Bytes
          </label>
          <input
            type="text"
            id="inputPassword5"
            className="form-control readonly"
            value={`${bytesValue.toLocaleString()} bytes`}
          />
        </section>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleReset}
        >
          Reset
        </button>
        <br />
        <br />
        <hr />

        <section className="main-section">
          <div class="d-grid gap-2">
            <NavLink to="https://10.19.44.2/ireport/agent_clm/login.php" target="_blank">
              <button class="btn btn-primary IR-btn" type="button" >
                Compensation IR Record
              </button>
            </NavLink>
          </div>
        </section><br /><hr />

        <section className="compensation-srs container">
        
          <div className="title-section">
            <h1 className="srSection-title">Compensation SRs</h1>
          </div>
          <div className="sr-Container">
            <div className="dropdown">
              <button
                className="btn btn-warning dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Data Down
              </button>
              <ul className="dropdown-menu">
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Tech%20Concession%20Data%20Down&srTypeId=101003014&t=1609453264509&tabId=sr0.9918948071469791&topUrl=&custid=&serviceInfoChar107=1&serviceInfoChar110=2&&BMEWebToken=null&serviceTitle=Billing%20Adjustment&serviceInfoChar282=Billing%20Adjustment&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=&serviceContent=CST%20ask%20concession%20as%20per%20tts%20(xxxxx)%20and%20cst%20need%20his%20concession%20(%20Balance%20%20%20%20Free%20Extra%20Quota%20)%20&subsNumber=FBB"
                  >
                    <b>Technical Concession</b>
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="dropdown">
              <button
                className="btn btn-warning dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Data and Voice Down
              </button>
              <ul className="dropdown-menu">
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Tech%20Concession%20Data%20and%20Voice%20Down&srTypeId=101003023&t=1609455209100&tabId=sr0.22103775192277075&topUrl=&custid=&serviceInfoChar107=1&serviceInfoChar110=2&&BMEWebToken=null&serviceTitle=Billing%20Adjustment&serviceInfoChar282=Billing%20Adjustment&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=&serviceContent=CST%20ask%20concession%20as%20per%20tts%20(xxxxx)%20and%20cst%20need%20his%20concession%20(%20Balance%20%20%20%20Free%20Extra%20Quota%20)%20&subsNumber=FBB"
                  >
                    <b>Technical Concession</b>
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="dropdown">
              <button
                className="btn btn-warning dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Voice Overlapping
              </button>
              <ul className="dropdown-menu">
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Tech%20Concession%20Voice%20overlapping&srTypeId=101003019&t=1609454495813&tabId=sr0.887771674783843&topUrl=&custid=&serviceInfoChar107=1&serviceInfoChar110=2&&BMEWebToken=null&serviceTitle=Billing%20Adjustment&serviceInfoChar282=Billing%20Adjustment&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=&serviceContent=CST%20ask%20concession%20as%20per%20tts%20(xxxxx)%20and%20cst%20need%20his%20concession%20(%20Balance%20%20%20%20Free%20Extra%20Quota%20)&subsNumber=FBB"
                  >
                    <b>Technical Concession</b>
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="dropdown">
              <button
                className="btn btn-warning dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Physical Instability
              </button>
              <ul className="dropdown-menu">
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Tech%20Concession%20Physical%20instability&srTypeId=101003015&t=1609453833336&tabId=sr0.12743927776342834&topUrl=&custid=&serviceInfoChar107=1&serviceInfoChar110=2&&BMEWebToken=null&serviceTitle=Billing%20Adjustment&serviceInfoChar282=Billing%20Adjustment&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=&serviceContent=CST%20ask%20concession%20as%20per%20tts%20(xxxxx)%20and%20cst%20need%20his%20concession%20(%20Balance%20%20%20%20Free%20Extra%20Quota%20)%20&subsNumber=FBB"
                  >
                    <b>Technical Concession</b>
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="dropdown">
              <button
                className="btn btn-warning dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Bad Line Quality
              </button>
              <ul className="dropdown-menu">
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Tech%20Concession%20BLQ&srTypeId=101003024&t=1609455432505&tabId=sr0.7801363000149816&topUrl=&custid=&serviceInfoChar107=1&serviceInfoChar110=2&&BMEWebToken=null&serviceTitle=Billing%20Adjustment&serviceInfoChar282=Billing%20Adjustment&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=&serviceContent=CST%20ask%20concession%20as%20per%20tts%20(xxxxx)%20and%20cst%20need%20his%20concession%20(%20Balance%20%20%20%20Free%20Extra%20Quota%20)%20&subsNumber=FBB"
                    target="_blank"
                  >
                    <b>Technical Concession</b>
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="dropdown">
              <button
                className="btn btn-warning dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Wrong Card and Port
              </button>
              <ul className="dropdown-menu">
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Tech%20Concession%20WCAP&srTypeId=101003020&t=1609454768441&tabId=sr0.4896094643664247&topUrl=&custid=&serviceInfoChar107=1&serviceInfoChar110=2&&BMEWebToken=null&serviceTitle=Billing%20Adjustment&serviceInfoChar282=Billing%20Adjustment&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=&serviceContent=CST%20ask%20concession%20as%20per%20tts%20(xxxxx)%20and%20cst%20need%20his%20concession%20(%20Balance%20%20%20%20Free%20Extra%20Quota%20)&subsNumber=FBB"
                  >
                    <b>Technical Concession</b>
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="dropdown">
              <button
                className="btn btn-warning dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Logical Instability
              </button>
              <ul className="dropdown-menu">
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Tech%20Concession%20Logical%20Instability&srTypeId=101003017&t=1609454081588&tabId=sr0.4453350074201686&topUrl=&custid=&serviceInfoChar107=1&serviceInfoChar110=2&&BMEWebToken=null&serviceTitle=Billing%20Adjustment&serviceInfoChar282=Billing%20Adjustment&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=&serviceContent=CST%20ask%20concession%20as%20per%20tts%20(xxxxx)%20and%20cst%20need%20his%20concession%20(%20Balance%20%20%20%20Free%20Extra%20Quota%20)&subsNumber=FBB"
                  >
                    <b>Technical Concession</b>
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="dropdown">
              <button
                className="btn btn-warning dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Unable to obtain IP
              </button>
              <ul className="dropdown-menu">
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Tech%20Concession%20Unable%20to%20Obtain%20IP&srTypeId=101003018&t=1609454222977&tabId=sr0.3859109871636368&topUrl=&custid=&serviceInfoChar107=1&serviceInfoChar110=2&&BMEWebToken=null&serviceTitle=Billing%20Adjustment&serviceInfoChar282=Billing%20Adjustment&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=&serviceContent=CST%20ask%20concession%20as%20per%20tts%20(xxxxx)%20and%20cst%20need%20his%20concession%20(%20Balance%20%20%20%20Free%20Extra%20Quota%20)&subsNumber=FBB"
                  >
                    <b>Technical Concession</b>
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="dropdown">
              <button
                className="btn btn-warning dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Browsing
              </button>
              <ul className="dropdown-menu">
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Tech%20Concession%20browsing&srTypeId=101003026&t=1609455645166&tabId=sr0.22584596259120915&topUrl=&custid=&serviceInfoChar107=1&serviceInfoChar110=2&&BMEWebToken=null&serviceTitle=Billing%20Adjustment&serviceInfoChar282=Billing%20Adjustment&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=&serviceContent=CST%20ask%20concession%20as%20per%20tts%20(xxxxx)%20and%20cst%20need%20his%20concession%20(%20Balance%20%20%20%20Free%20Extra%20Quota%20)%20&subsNumber=FBB"
                  >
                    <b>Technical Concession</b>
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="dropdown">
              <button
                className="btn btn-warning dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Slowness
              </button>
              <ul className="dropdown-menu">
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Tech%20Concession%20Slowness%20or%20Utilization&srTypeId=101003022&t=1609455093718&tabId=sr0.33744728919713973&topUrl=&custid=&serviceInfoChar107=1&serviceInfoChar110=2&&BMEWebToken=null&serviceTitle=Billing%20Adjustment&serviceInfoChar282=Billing%20Adjustment&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=&serviceContent=CST%20ask%20concession%20as%20per%20tts%20(xxxxx)%20and%20cst%20need%20his%20concession%20(%20Balance%20%20%20%20Free%20Extra%20Quota%20)&subsNumber=FBB"
                  >
                    <b>Technical Concession</b>
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="dropdown">
              <button
                className="btn btn-warning dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Outage
              </button>
              <ul className="dropdown-menu">
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Tech%20Concession%20Global%20problem%20or%20outage&srTypeId=101003016&t=1609453943573&tabId=sr0.4635913787806568&topUrl=&custid=&serviceInfoChar107=1&serviceInfoChar110=2&&BMEWebToken=null&serviceTitle=Billing%20Adjustment&serviceInfoChar282=Billing%20Adjustment&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=CST%20ask%20concession%20as%20per%20outage%20id%20(%20%20%20%20%20%20)%20and%20cst%20need%20his%20concession%20(%20Balance%20%20%20%20Free%20Extra%20Quota%20)%20&subsNumber=FBB"
                  >
                    <b>Technical Concession</b>
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="dropdown">
              <button
                className="btn btn-warning dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Need Optimization
              </button>
              <ul className="dropdown-menu">
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Tech%20Concession%20Need%20optimization&srTypeId=101003025&t=1609455564391&tabId=sr0.6171126757474732&topUrl=&custid=&serviceInfoChar107=1&serviceInfoChar110=2&&BMEWebToken=null&serviceTitle=Billing%20Adjustment&serviceInfoChar282=Billing%20Adjustment&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=&serviceContent=CST%20ask%20concession%20as%20per%20tts%20(xxxxx)%20and%20cst%20need%20his%20concession%20(%20Balance%20%20%20%20Free%20Extra%20Quota%20)%20&subsNumber=FBB"
                  >
                    <b>Technical Concession</b>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
    
        </section>
      </main>
    </>
  );
};

export default Compensation;
