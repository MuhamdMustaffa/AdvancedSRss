import React, { useState, useRef} from "react";
import "./SRs.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

const SRs = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchInput, setSearchInput] = useState('');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      search();
    }
  };

  const search = () => {
    const srData = document.querySelectorAll('.dropdown-item');
    for (let i = 0; i < srData.length; i++) {
      const srSearchName = srData[i].querySelector('b');
      if (srSearchName.innerHTML.toUpperCase().indexOf(searchInput.toUpperCase()) >= 0) {
        srData[i].style.display = '';
      } else {
        srData[i].style.display = 'none';
      }
    }
  
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const inputRef = useRef();

  const handleCopy = () => {
    inputRef.current.select();
    document.execCommand("copy");
  };

  const handleReset = () => {
    setInputValue('');
};
  return (
    <>
      <section className="SRs-section container">
        <div className="upperSection">
        <div>
      <input
        type="text"
        className="search_input"
        placeholder="Type to search..."
        value={searchInput}
        onChange={(event) => setSearchInput(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className="searchBtn btn btn-outline-success" onClick={search}>Search</button>
    </div><br />
          <div className="input-Container">
            <div className="Input-text">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  value={inputValue}
                  onChange={handleChange}
                />
                <label for="floatingInput">DSL Landline Number</label>
              </div>
            </div>

            <div className="Result-text">
              <div className="upper-Result">
                <div className="form-floating mb-3">
                <input
                  className="form-control resulted-text"
                  type="text"
                  ref={inputRef}
                  value={"FBB" + inputValue}
                  aria-label="readonly input example"
                  readonly
                />
              </div>

              <div className="lower-btn">
                <button
                className="ٌresult-Button btns"
                id="copy-button"
                onClick={handleCopy}
              >
                <span className="circle1"></span>
                <span className="circle2"></span>
                <span className="circle3"></span>
                <span className="circle4"></span>
                <span className="circle5"></span>
                <span className="text">Copy</span>
              </button>
              <button className="ٌresult-Button btns" id="reset-button" onClick={handleReset}>Reset</button>
              </div>
              </div>
              <br />
              
            </div>
          </div>
        </div>

        <br />
        <hr />

        <div className="closeCodes">
          <div className="container">
            <div className="title-section">
              <h1 className="srSection-title">Close Codes</h1>
            </div>
          </div>

          <div className="sr-Container">
            <div className="dropdown">
              <button
                className="btn btn-primary dropdown-toggle"
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
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Reached&srTypeId=126004001&t=1700508503023&tabId=sr0.036061542742992&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Reached&serviceInfoChar282=Reached&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Chat-ADSL%20Follow%20up%20chat%20agent,%20Chat%20Dropped%20as%20issue%20happened%20lead%20to%20that,but%20we%20called%20him%20again%20and%20reached."
                  >
                    <b>Reached</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Not%20reached&srTypeId=126004002&t=1612692991171&tabId=sr0.5864903284323394&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Not%20reached&serviceInfoChar282=Not%20reached&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Chat-ADSL%20Follow%20up%20chat%20agent,%20Chat%20Dropped%20as%20issue%20happened%20lead%20to%20that,but%20we%20called%20him%20again%20and%20not%20reached."
                  >
                    <b>Not Reached</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=MV-Internal%20Wiring&srTypeId=102034009&t=1700512716940&tabId=sr0.2219721155682164&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=MV-Internal%20Wiring&serviceInfoChar282=MV-Internal%20Wiring&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Chat-ADSL%20Follow%20up%20chat%20agent,Regarding%20ticket%20number%20.......,Problem%20solved%20after%20mv-internal%20wiring"
                  >
                    <b>Problem solved after mv-internal wiring</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Internal%20Wiring&srTypeId=102034013&t=1700509537311&tabId=sr0.8055922713824584&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Internal%20Wiring&serviceInfoChar282=Internal%20Wiring&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Chat-Adsl%20Follow%20up%20Chat%20Agent,Regarding%20Ticket%20number%20.....,Problem%20Solved%20after%20fix%20internal%20wiring"
                  >
                    <b>Problem solved after fix internal wiring</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=change%20internal&srTypeId=102034058&t=1699267161959&tabId=sr0.30819633155992654&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Change%20Internal&serviceInfoChar282=Change%20Internal&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Chat-Adsl%20Follow%20up%20Chat%20Agent,Regarding%20Ticket%20number%20.....,Problem%20Solved%20after%20Change%20Internal"
                  >
                    <b>Problem solved after change internal</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=change%20external&srTypeId=102034057&t=1699266859644&tabId=sr0.35891053659910765&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Change%20External&serviceInfoChar282=Change%20External&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Solved%20by%20Change%20External"
                  >
                    <b>Problem solved after change external</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Solved%20By%20Exchange&srTypeId=102034007&t=1585337348174&tabId=sr0.3600771887938873&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Solved%20By%20Exchange&serviceInfoChar282=Solved%20By%20Exchange&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Solved%20By%20Exchange%20."
                  >
                    <b>Problem solved after Fixed from exchange</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Other&srTypeId=102034019&t=1588106317422&tabId=sr0.8474567916644128&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Other&serviceInfoChar282=Other&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Ticket%20closed%20with%20close%20code%20xxxx"
                  >
                    <b>Problem solved after change new port</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=CPE%20Problem&srTypeId=102034016&t=1585337348660&tabId=sr0.7748813165547658&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=CPE%20Problem&serviceInfoChar282=CPE%20Problem&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=CPE%20Problem"
                  >
                    <b>Problem solved after change customer CPE</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=cabin%20problem&srTypeId=102034056&t=1699266625219&tabId=sr0.04823613559328188&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Cabin%20Problem&serviceInfoChar282=Cabin%20Problem&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Solved%20from%20Cabin%20"
                  >
                    <b>Problem solved after Fixed from cabin side</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Box%20Problem&srTypeId=102034051&t=1698256028916&tabId=sr0.26096909981890404&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Box%20Problem&serviceInfoChar282=Box%20Problem&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Solved%20from%20Box"
                  >
                    <b>Problem solved after Fixed from Box side</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=External%20wire&srTypeId=102034059&t=1701905385644&tabId=sr0.7426013132474699&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=External%20wire&serviceInfoChar282=External%20wire&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent="
                  >
                    <b>Problem solved after fix external wire</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Line%20stable%20/no%20problem%20found&srTypeId=102034061&t=1699267476373&tabId=sr0.4948995486553134&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Line%20stable%20-no%20problem%20found&serviceInfoChar282=Line%20stable%20-no%20problem%20found&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Line%20stable%20-no%20problem%20found"
                  >
                    <b>Line stable /no problem found</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Power%20Failure-Direct%20CST%20to%20CSO&srTypeId=102034045&t=1702686253202&tabId=sr0.03501928957673639&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Power%20Failure-Direct%20CST%20to%20CSO&serviceInfoChar282=Power%20Failure-Direct%20CST%20to%20CSO&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent="
                  >
                    <b>Power Failure-Direct CST to CSO</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Power%20Failure&srTypeId=102034008&t=1702686253141&tabId=sr0.19622519421397344&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Power%20Failure&serviceInfoChar282=Power%20Failure&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent="
                  >
                    <b>Power Failure</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Unavailable-%20customer%20request&srTypeId=102034063&t=1699267699512&tabId=sr0.9293272738773428&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Unavailable-%20customer%20request&serviceInfoChar282=Unavailable-%20customer%20request&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Unavailable-%20customer%20request"
                  >
                    <b>Customer not available - schedule in comment</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Other&srTypeId=102034019&t=1588106317422&tabId=sr0.8474567916644128&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Other&serviceInfoChar282=Other&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Ticket%20closed%20with%20close%20code%20xxxx"
                  >
                    <b>External problem- cable maintenance needed</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=CPE%20Problem&srTypeId=102034016&t=1585337348660&tabId=sr0.7748813165547658&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=CPE%20Problem&serviceInfoChar282=CPE%20Problem&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=CPE%20Problem"
                  >
                    <b>CPE customer problem</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Engineering%20Inspection-Transfer%20To%20Exchange&srTypeId=102034041&t=1668616835368&tabId=sr0.6345511420658032&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Engineering%20Inspection-Transfer%20To%20Exchange&serviceInfoChar282=Engineering%20Inspection-Transfer%20To%20Exchange&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Direct%20CST%20To%20Exchange"
                  >
                    <b>Engineering Inspection</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Installation%20Issue&srTypeId=102034060&t=1699267390992&tabId=sr0.7450845310354992&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Installation%20Issue&serviceInfoChar282=Installation%20Issue&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Installation%20Issue"
                  >
                    <b>Installation Issue</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Stalagmite%20problem&srTypeId=102034062&t=1699267602584&tabId=sr0.9737284255324155&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Stalagmite%20problem&serviceInfoChar282=Stalagmite%20problem&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Stalagmite%20problem"
                  >
                    <b>Stalagmite problem</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=IU-Resplitted&srTypeId=102034012&t=1701906512717&tabId=sr0.7908626466456579&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=IU-Resplitted&serviceInfoChar282=IU-Resplitted&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent="
                  >
                    <b>IU-Resplitted</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Other&srTypeId=102034019&t=1588106317422&tabId=sr0.8474567916644128&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Other&serviceInfoChar282=Other&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Ticket%20closed%20with%20close%20code%20xxxx"
                  >
                    <b>Other</b>
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="dropdown">
              <button
                className="btn btn-primary dropdown-toggle"
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
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Reached&srTypeId=126003001&t=1612692990953&tabId=sr0.9876423689089965&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Data%20and%20Voice%20Down&serviceInfoChar282=Data%20and%20Voice%20Down&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=called%20cst%20back%20and%20reached%20.%20"
                  >
                    <b>Reached</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=not%20reached&srTypeId=126003002&t=1612692991002&tabId=sr0.26550201795129125&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Data%20and%20Voice%20Down&serviceInfoChar282=Data%20and%20Voice%20Down&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=called%20cst%20back%20and%20not%20reached%20.%20"
                  >
                    <b>Not Reached</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Internal%20Wiring&srTypeId=102006010&t=1700512135570&tabId=sr0.26974388726581977&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Internal%20Wiring&serviceInfoChar282=Internal%20Wiring&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Chat-Adsl%20Follow%20up%20Chat%20Agent,Regarding%20Ticket%20number%20.....,Problem%20Solved%20after%20fix%20internal%20wiring"
                  >
                    <b>Problem solved after fix internal wiring</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=change%20internal&srTypeId=102006055&t=1699274782550&tabId=sr0.6467049717880442&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Change%20Internal&serviceInfoChar282=Change%20Internal&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Solved%20by%20Change%20Internal"
                  >
                    <b>Problem solved after change internal</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Box%20Problem&srTypeId=102006048&t=1698256028968&tabId=sr0.866647724232749&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Box%20Problem&serviceInfoChar282=Box%20Problem&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Solved%20from%20Box"
                  >
                    <b>Problem solved after Fixed from Box side</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=change%20external&srTypeId=102006054&t=1699275407748&tabId=sr0.7790454647481968&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Change%20External&serviceInfoChar282=Change%20External&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Solved%20by%20Change%20External"
                  >
                    <b>Problem solved after change external</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Solved%20By%20Exchange&srTypeId=102006006&t=1585337347080&tabId=sr0.9199307849925996&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Solved%20By%20Exchange&serviceInfoChar282=Solved%20By%20Exchange&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Solved%20By%20Exchange%20."
                  >
                    <b>Problem solved after Fixed from exchange</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=MV-Internal%20Wiring&srTypeId=102006016&t=1700512646338&tabId=sr0.8053118438666289&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=MV-Internal%20Wiring&serviceInfoChar282=MV-Internal%20Wiring&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Chat-ADSL%20Follow%20up%20chat%20agent,Regarding%20ticket%20number%20.......,Problem%20solved%20after%20mv-internal%20wiring"
                  >
                    <b>Problem solved after mv-internal wiring</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Other&srTypeId=102006018&t=1588105970667&tabId=sr0.9503158016442094&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Other&serviceInfoChar282=Other&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Ticket%20closed%20with%20close%20code%20xxxx"
                  >
                    <b>Problem solved after change new port</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=CPE%20Problem&srTypeId=102006013&t=1585337347551&tabId=sr0.9121583349521534&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=CPE%20Problem&serviceInfoChar282=CPE%20Problem&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=CPE%20Problem"
                  >
                    <b>Problem solved after change customer CPE</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=cabin%20problem&srTypeId=102006053&t=1699275328330&tabId=sr0.3233332708718408&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Cabin%20Problem&serviceInfoChar282=Cabin%20Problem&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Solved%20from%20Cabin%20"
                  >
                    <b>Problem solved after Fixed from cabin side</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=External%20wire&srTypeId=102006056&t=1701905571375&tabId=sr0.846930611500098&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=External%20wire&serviceInfoChar282=External%20wire&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent="
                  >
                    <b>Problem solved after fix external wire</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Unavailable-%20customer%20request&srTypeId=102006060&t=1699276697709&tabId=sr0.20777340624906193&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Unavailable-%20customer%20request&serviceInfoChar282=Unavailable-%20customer%20request&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Unavailable-%20customer%20request"
                  >
                    <b>Customer not available - schedule in comment</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Line%20stable%20/no%20problem%20found&srTypeId=102006058&t=1699276290528&tabId=sr0.5227093097219959&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Line%20stable%20-no%20problem%20found&serviceInfoChar282=Line%20stable%20-no%20problem%20found&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Line%20stable%20-no%20problem%20found"
                  >
                    <b>Line stable /no problem found</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Other&srTypeId=102006018&t=1588105970667&tabId=sr0.9503158016442094&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Other&serviceInfoChar282=Other&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Ticket%20closed%20with%20close%20code%20xxxx"
                  >
                    <b>External problem- cable maintenance needed</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=CPE%20Problem&srTypeId=102006013&t=1585337347551&tabId=sr0.9121583349521534&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=CPE%20Problem&serviceInfoChar282=CPE%20Problem&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=CPE%20Problem"
                  >
                    <b>CPE customer problem</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Engineering%20Inspection-Transfer%20To%20Exchange&srTypeId=102006040&t=1668616727960&tabId=sr0.3790959493895165&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Engineering%20Inspection&serviceInfoChar282=Engineering%20Inspection&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Direct%20CST%20To%20Exchange."
                  >
                    <b>Engineering Inspection</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Installation%20Issue&srTypeId=102006057&t=1699275848315&tabId=sr0.6903047023977655&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Installation%20Issue&serviceInfoChar282=Installation%20Issue&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Installation%20Issue"
                  >
                    <b>Installation Issue</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Stalagmite%20problem&srTypeId=102006059&t=1699276353009&tabId=sr0.974098574085043&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Stalagmite%20problem&serviceInfoChar282=Stalagmite%20problem&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Stalagmite%20problem"
                  >
                    <b>Stalagmite problem</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Power%20Failure&srTypeId=102006007&t=1702686253056&tabId=sr0.41269977492890886&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Power%20Failure&serviceInfoChar282=Power%20Failure&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent="
                  >
                    <b>Power Failure</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=IU-Resplitted&srTypeId=102006009&t=1701906512694&tabId=sr0.5292453911668927&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=IU-Resplitted&serviceInfoChar282=IU-Resplitted&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent="
                  >
                    <b>IU-Resplitted</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Other&srTypeId=102006018&t=1588105970667&tabId=sr0.9503158016442094&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Other&serviceInfoChar282=Other&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Ticket%20closed%20with%20close%20code%20xxx"
                  >
                    <b>Other</b>
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="dropdown">
              <button
                className="btn btn-primary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Voice Down
              </button>
              <ul className="dropdown-menu">
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Reached&srTypeId=126013001&t=1612694868551&tabId=sr0.5049810222445136&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Reached&serviceInfoChar282=Reached&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=called%20cst%20back%20and%20reached%20.%20"
                  >
                    <b>Reached</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=not%20reached&srTypeId=126013002&t=1612694868606&tabId=sr0.9660300965478872&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=not%20reached&serviceInfoChar282=not%20reached&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=called%20cst%20back%20and%20not%20reached%20.%20"
                  >
                    <b>Not Reached</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Internal%20Wiring&srTypeId=102005003&t=1700518598719&tabId=sr0.028296412762489176&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Internal%20Wiring&serviceInfoChar282=Internal%20Wiring&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Chat-Adsl%20Follow%20up%20Chat%20Agent,Regarding%20Ticket%20number%20.....,Problem%20Solved%20after%20fix%20internal%20wiring"
                  >
                    <b>Problem solved after fix internal wiring</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=change%20internal&srTypeId=102005051&t=1699274688557&tabId=sr0.07835634841102146&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Change%20Internal&serviceInfoChar282=Change%20Internal&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Solved%20by%20Change%20Internal"
                  >
                    <b>Problem solved after change internal</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Box%20Problem&srTypeId=102005044&t=1698256029090&tabId=sr0.4048315671087397&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Box%20Problem&serviceInfoChar282=Box%20Problem&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Solved%20from%20Box"
                  >
                    <b>Problem solved after Fixed from Box side</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=change%20external&srTypeId=102005050&t=1699275479909&tabId=sr0.14002415213419006&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Change%20External&serviceInfoChar282=Change%20External&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Solved%20by%20Change%20External"
                  >
                    <b>Problem solved after change external</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Internal%20Wiring&srTypeId=102005003&t=1700516415835&tabId=sr0.07308815040428429&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Internal%20Wiring&serviceInfoChar282=Internal%20Wiring&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Solved%20after%20fix%20internal%20wiring"
                  >
                    <b>Problem solved after fix internal wiring</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Other&srTypeId=102005007&t=1588105970620&tabId=sr0.8321069838970411&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Other&serviceInfoChar282=Other&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Ticket%20closed%20with%20close%20code%20xxxx"
                  >
                    <b>Problem solved after change new port</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=cabin%20problem&srTypeId=102005049&t=1699275289210&tabId=sr0.41026224189655247&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Cabin%20Problem&serviceInfoChar282=Cabin%20Problem&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Solved%20from%20Cabin%20"
                  >
                    <b>Problem solved after Fixed from cabin side</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=External%20wire&srTypeId=102005052&t=1701905571345&tabId=sr0.5832419214166648&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=External%20wire&serviceInfoChar282=External%20wire&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent="
                  >
                    <b>Problem solved after fix external wire</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Line%20stable%20/no%20problem%20found&srTypeId=102005054&t=1699276252801&tabId=sr0.4662481501413289&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Line%20stable%20-no%20problem%20found&serviceInfoChar282=Line%20stable%20-no%20problem%20found&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Line%20stable%20-no%20problem%20found"
                  >
                    <b>Line stable /no problem found</b>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Unavailable-%20customer%20request&srTypeId=102005056&t=1699276660813&tabId=sr0.6560680759804596&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Unavailable-%20customer%20request&serviceInfoChar282=Unavailable-%20customer%20request&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Unavailable-%20customer%20request"
                  >
                    <b>Customer not available - schedule in comment</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Other&srTypeId=102005007&t=1588105970620&tabId=sr0.8321069838970411&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Other&serviceInfoChar282=Other&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Ticket%20closed%20with%20close%20code%20xxxx"
                  >
                    <b>External problem- cable maintenance needed</b>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Engineering%20Inspection-Transfer%20To%20Exchange&srTypeId=102005035&t=1668616677724&tabId=sr0.16530602139139505&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Engineering%20Inspection-Transfer%20To%20Exchange&serviceInfoChar282=Engineering%20Inspection-Transfer%20To%20Exchange&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Direct%20CST%20To%20Exchange."
                  >
                    <b>Engineering Inspection</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Installation%20Issue&srTypeId=102005053&t=1699275909132&tabId=sr0.798820362822817&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Installation%20Issue&serviceInfoChar282=Installation%20Issue&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Installation%20Issue"
                  >
                    <b>Installation Issue</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Stalagmite%20problem&srTypeId=102005055&t=1699276380906&tabId=sr0.13840090571249064&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Stalagmite%20problem&serviceInfoChar282=Stalagmite%20problem&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Stalagmite%20problem"
                  >
                    <b>Stalagmite problem</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Other&srTypeId=102005007&t=1588105970620&tabId=sr0.8321069838970411&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Other&serviceInfoChar282=Other&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Ticket%20closed%20with%20close%20code%20xxxx"
                  >
                    <b>Other</b>
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="dropdown">
              <button
                className="btn btn-primary dropdown-toggle"
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
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Reached&srTypeId=126014001&t=1700519013176&tabId=sr0.4738039404966873&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken="
                  >
                    <b>Reached</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=not%20reached&srTypeId=126014002&t=1700519072178&tabId=sr0.5607842404399279&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken="
                  >
                    <b>Not Reached</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Box%20Problem&srTypeId=102004030&t=1698256029129&tabId=sr0.567403320961795&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Box%20Problem&serviceInfoChar282=Box%20Problem&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Solved%20from%20Box"
                  >
                    <b>Problem solved after Fixed from Box side</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Major%20Fault&srTypeId=102004008&t=1612346969768&tabId=sr0.14104350138633548&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Major%20Fault&serviceInfoChar282=Major%20Fault&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Inf%20CST%20Major%20Fault%20Script."
                  >
                    <b>Major Fault Problem</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Engineering%20Inspection-Transfer%20To%20Exchange&srTypeId=102004020&t=1668616618900&tabId=sr0.3287655098838618&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Engineering%20Inspection-Transfer%20To%20Exchange&serviceInfoChar282=Engineering%20Inspection-Transfer%20To%20Exchange&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Direct%20CST%20To%20Exchange."
                  >
                    <b>Engineering Inspection</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Other&srTypeId=102004004&t=1588105970582&tabId=sr0.16193733089870666&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Voice%20Overlapping&serviceInfoChar282=Voice%20Overlapping&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Ticket%20closed%20with%20close%20code%20xxxx"
                  >
                    <b>Other</b>
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="dropdown">
              <button
                className="btn btn-primary dropdown-toggle"
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
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Reached&srTypeId=126009001&t=1612692991836&tabId=sr0.8344160672783278&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Reached&serviceInfoChar282=Reached&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=called%20cst%20back%20and%20reached%20.%20"
                  >
                    <b>Reached</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=not%20reached&srTypeId=126009002&t=1612692991880&tabId=sr0.4235964572119092&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=not%20reached&serviceInfoChar282=not%20reached&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=called%20cst%20back%20and%20not%20reached%20.%20"
                  >
                    <b>Not Reached</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=MV-Internal Wiring%20Wiring&srTypeId=102014008&t=1585334138739&tabId=sr0.3639570203349908&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=MV-Internal Wiring%20Wiring&serviceInfoChar282=MV-Internal Wiring%20Wiring&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=problem%20is%20%E2%80%8Bsolved%20after%20MV-Internal Wiring%20wiring%20"
                  >
                    <b>Problem solved after mv-internal wiring</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=change%20internal&srTypeId=102014057&t=1699274916822&tabId=sr0.3711774512454311&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Change%20Internal&serviceInfoChar282=Change%20Internal&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Solved%20by%20Change%20Internal"
                  >
                    <b>Problem solved after change internal</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Box%20Problem&srTypeId=102014050&t=1698256029015&tabId=sr0.7904128233391243&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Box%20Problem&serviceInfoChar282=Box%20Problem&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Solved%20from%20Box"
                  >
                    <b>Problem solved after Fixed from Box side</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=change%20external&srTypeId=102014056&t=1699275572854&tabId=sr0.5101390722804278&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Change%20External&serviceInfoChar282=Change%20External&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Solved%20by%20Change%20External"
                  >
                    <b>Problem solved after change external</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Solved%20By%20Exchange&srTypeId=102014006&t=1585334138618&tabId=sr0.42279906682342394&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Solved%20By%20Exchange&serviceInfoChar282=Solved%20By%20Exchange&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Solved%20By%20Exchange%20."
                  >
                    <b>Problem solved after Fixed from exchange</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Internal%20Wiring&srTypeId=102014011&t=1700517277616&tabId=sr0.5274145482083581&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Internal%20Wiring&serviceInfoChar282=Internal%20Wiring&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Problem%20solved%20after%20fix%20internal%20wiring"
                  >
                    <b>Problem solved after fix internal wiring</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Other&srTypeId=102014018&t=1588105970937&tabId=sr0.22862598934686196&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Other&serviceInfoChar282=Other&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Ticket%20closed%20with%20close%20code%20xxxx"
                  >
                    <b>Problem solved after change new port</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=CPE%20Problem&srTypeId=102014014&t=1585334139144&tabId=sr0.5329024825867781&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=CPE%20Problem&serviceInfoChar282=CPE%20Problem&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=CPE%20Problem"
                  >
                    <b>Problem solved after change customer CPE</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=cabin%20problem&srTypeId=102014055&t=1699275178503&tabId=sr0.17550081628351477&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Cabin%20Problem&serviceInfoChar282=Cabin%20Problem&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Solved%20from%20Cabin%20"
                  >
                    <b>Problem solved after Fixed from cabin side</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=External%20wire&srTypeId=102014058&t=1701905571397&tabId=sr0.10284699954059806&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=External%20wire&serviceInfoChar282=External%20wire&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent="
                  >
                    <b>Problem solved after fix external wire</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Line%20stable%20/no%20problem%20found&srTypeId=102014060&t=1699276126269&tabId=sr0.19345011268797485&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Line%20stable%20-no%20problem%20found&serviceInfoChar282=Line%20stable%20-no%20problem%20found&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Line%20stable%20-no%20problem%20found"
                  >
                    <b>Line stable /no problem found</b>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Power%20Failure-Direct%20CST%20to%20CSO&srTypeId=102014044&t=1702686253126&tabId=sr0.22845841200228034&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Power%20Failure-Direct%20CST%20to%20CSO&serviceInfoChar282=Power%20Failure-Direct%20CST%20to%20CSO&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent="
                  >
                    <b>Power Failure-Direct CST to CSO</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Power%20Failure&srTypeId=102014007&t=1702686253083&tabId=sr0.2681590637108039&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Power%20Failure&serviceInfoChar282=Power%20Failure&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent="
                  >
                    <b>Power Failure</b>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Unavailable-%20customer%20request&srTypeId=102014062&t=1699276564692&tabId=sr0.6536623518923532&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Unavailable-%20customer%20request&serviceInfoChar282=Unavailable-%20customer%20request&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Unavailable-%20customer%20request"
                  >
                    <b>Customer not available - schedule in comment</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Other&srTypeId=102014018&t=1588105970937&tabId=sr0.22862598934686196&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Other&serviceInfoChar282=Other&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Ticket%20closed%20with%20close%20code%20xxxx"
                  >
                    <b>External problem- cable maintenance needed</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=CPE%20Problem&srTypeId=102014014&t=1585334139144&tabId=sr0.5329024825867781&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=CPE%20Problem&serviceInfoChar282=CPE%20Problem&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=CPE%20Problem"
                  >
                    <b>CPE customer problem</b>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Engineering%20Inspection-Transfer%20To%20Exchange&srTypeId=102014038&t=1668616799538&tabId=sr0.7487130103827722&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Engineering%20Inspection-Transfer%20To%20Exchange&serviceInfoChar282=Engineering%20Inspection-Transfer%20To%20Exchange&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Direct%20CST%20To%20Exchange."
                  >
                    <b>Engineering Inspection</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Installation%20Issue&srTypeId=102014059&t=1699275981364&tabId=sr0.7791529497532781&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Installation%20Issue&serviceInfoChar282=Installation%20Issue&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Installation%20Issue"
                  >
                    <b>Installation Issue</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Stalagmite%20problem&srTypeId=102014061&t=1699276449995&tabId=sr0.2575075012522643&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Stalagmite%20problem&serviceInfoChar282=Stalagmite%20problem&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Stalagmite%20problem"
                  >
                    <b>Stalagmite problem</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Other&srTypeId=102014018&t=1588105970937&tabId=sr0.22862598934686196&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Other&serviceInfoChar282=Other&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Ticket%20closed%20with%20close%20code%20xxxx"
                  >
                    <b>Other</b>
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="dropdown">
              <button
                className="btn btn-primary dropdown-toggle"
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
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Reached&srTypeId=126001001&t=1612692990642&tabId=sr0.9967865053806672&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Reached&serviceInfoChar282=Reached&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=called%20cst%20back%20and%20reached%20.%20"
                    target="_blank"
                  >
                    <b>Reached</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=not%20reached&srTypeId=126001002&t=1612692990693&tabId=sr0.44073616769101454&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=not%20reached&serviceInfoChar282=not%20reached&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=called%20cst%20back%20and%20not%20reached%20.%20"
                    target="_blank"
                  >
                    <b>Not Reached</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=cabin%20problem&srTypeId=102040062&t=1699275237665&tabId=sr0.25740052358643584&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Cabin%20Problem&serviceInfoChar282=Cabin%20Problem&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Solved%20from%20Cabin%20"
                    target="_blank"
                  >
                    <b>Problem solved after Fixed from cabin side</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=change%20external&srTypeId=102040063&t=1699275526766&tabId=sr0.44699965120492213&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Change%20External&serviceInfoChar282=Change%20External&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Solved%20by%20Change%20External"
                    target="_blank"
                  >
                    <b>Problem solved after change external</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=change%20internal&srTypeId=102040064&t=1699274411963&tabId=sr0.8318205690675287&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Change%20Internal&serviceInfoChar282=Change%20Internal&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Solved%20by%20Change%20Internal"
                    target="_blank"
                  >
                    <b>Problem solved after change internal</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=External%20wire&srTypeId=102040065&t=1699275743168&tabId=sr0.8657979965006013&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=External%20wire&serviceInfoChar282=External%20wire&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Solved%20by%20fix%20External%20wire"
                    target="_blank"
                  >
                    <b>Problem solved after fix External wire</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=MV-Internal%20Wiring&srTypeId=102040009&t=1704623368712&tabId=sr0.9943099659288757&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB8&BMEWebToken=&serviceTitle=MV-Internal%20Wiring&serviceInfoChar282=MV-Internal%20Wiring&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent= "
                    target="_blank"
                  >
                    <b>Problem solved after internal wiring</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=MV-Internal%20Wiring&srTypeId=102040009&t=1585339021022&tabId=sr0.09720781301757808&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=MV-Internal%20Wiring&serviceInfoChar282=MV-Internal%20Wiring&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=problem%20is%20%E2%80%8Bsolved%20after%20mv-internal%20wiring%20"
                    target="_blank"
                  >
                    <b>Problem solved after mv-internal wiring</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Box%20Problem&srTypeId=102040057&t=1698256029053&tabId=sr0.9978641164212874&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Box%20Problem&serviceInfoChar282=Box%20Problem&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Solved%20from%20Box"
                    target="_blank"
                  >
                    <b>Problem solved after Fixed from Box side</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Installation%20Issue&srTypeId=102040066&t=1699275949332&tabId=sr0.37056070623995696&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Installation%20Issue&serviceInfoChar282=Installation%20Issue&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Installation%20Issue"
                    target="_blank"
                  >
                    <b>Installation Issue</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Line%20stable%20/no%20problem%20found&srTypeId=102040067&t=1699276167639&tabId=sr0.09558127740211098&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Line%20stable%20-no%20problem%20found&serviceInfoChar282=Line%20stable%20-no%20problem%20found&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Line%20stable%20-no%20problem%20found"
                    target="_blank"
                  >
                    <b>Line stable /no problem found</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Stalagmite%20problem&srTypeId=102040068&t=1699276416737&tabId=sr0.9558115667575089&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Stalagmite%20problem&serviceInfoChar282=Stalagmite%20problem&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Stalagmite%20problem"
                    target="_blank"
                  >
                    <b>Stalagmite problem</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Unavailable-%20customer%20request&srTypeId=102040069&t=1699276626245&tabId=sr0.2116475501847077&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Unavailable-%20customer%20request&serviceInfoChar282=Unavailable-%20customer%20request&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Unavailable-%20customer%20request"
                    target="_blank"
                  >
                    <b>Customer not available - schedule in comment</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Other&srTypeId=102040020&t=1588105971094&tabId=sr0.07904684755644054&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Other&serviceInfoChar282=Other&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Ticket%20closed%20with%20close%20code%20xxxx"
                    target="_blank"
                  >
                    <b>Other</b>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className="dropdown-item"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Engineering%20Inspection-Transfer%20To%20Exchange&srTypeId=102040044&t=1702681220597&tabId=sr0.028263634259267367&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Engineering%20Inspection-Transfer%20To%20Exchange&serviceInfoChar282=Engineering%20Inspection-Transfer%20To%20Exchange&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Direct%20CST%20To%20Exchange."
                    target="_blank"
                  >
                    <b>Engineering Inspection</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=CPE%20Problem&srTypeId=102040017&t=1585339021522&tabId=sr0.48114533086180744&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=CPE%20Problem&serviceInfoChar282=CPE%20Problem&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=CPE%20Problem"
                    target="_blank"
                  >
                    <b>CPE customer problem</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Resplitted&srTypeId=102040008&t=1701906512741&tabId=sr0.636648445609192&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=IU-Resplitted&serviceInfoChar282=IU-Resplitted&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent="
                    target="_blank"
                  >
                    <b>IU-Resplitted</b>
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="dropdown">
              <button
                className="btn btn-primary dropdown-toggle"
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
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Reached&srTypeId=126015001&t=1612694868878&tabId=sr0.48559837008126094&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=WCAP&serviceInfoChar282=WCAP&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=called%20cst%20back%20and%20reached%20.%20"
                  >
                    <b>Reached</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=not%20reached&srTypeId=126015002&t=1612694868917&tabId=sr0.17028042190874215&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=WCAP&serviceInfoChar282=WCAP&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=called%20cst%20back%20and%20not%20reached%20.%20"
                  >
                    <b>Not Reached</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=change%20internal&srTypeId=102001042&t=1699274515372&tabId=sr0.5340056778653397&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Change%20Internal&serviceInfoChar282=Change%20Internal&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Solved%20by%20Change%20Internal"
                  >
                    <b>Problem solved after change internal</b>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Box%20Problem&srTypeId=102001036&t=1698256029173&tabId=sr0.8502966385842947&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Box%20Problem&serviceInfoChar282=Box%20Problem&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Solved%20from%20Box"
                  >
                    <b>Problem solved after Fixed from Box side</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=change%20external&srTypeId=102001041&t=1699275606199&tabId=sr0.6756555464407776&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Change%20External&serviceInfoChar282=Change%20External&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Solved%20by%20Change%20External"
                  >
                    <b>Problem solved after change external</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Other&srTypeId=102001005&t=1588105970481&tabId=sr0.8150058301507606&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Other&serviceInfoChar282=Other&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Ticket%20closed%20with%20close%20code%20xxxx"
                  >
                    <b>Problem solved after change new port</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=CPE%20Problem&srTypeId=102001013&t=1607267204788&tabId=sr0.9321540272258382&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=CPE%20Problem&serviceInfoChar282=CPE%20Problem&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=CPE%20Problem"
                  >
                    <b>Problem solved after change customer CPE</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=cabin%20problem&srTypeId=102001040&t=1699275103009&tabId=sr0.4733219954586654&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Cabin%20Problem&serviceInfoChar282=Cabin%20Problem&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Solved%20from%20Cabin%20"
                  >
                    <b>Problem solved after Fixed from cabin side</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=External%20wire&srTypeId=102001043&t=1701905571312&tabId=sr0.9986476612244969&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=External%20wire&serviceInfoChar282=External%20wire&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent="
                  >
                    <b>Problem solved after fix external wire</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Line%20stable%20/no%20problem%20found&srTypeId=102001045&t=1699276084446&tabId=sr0.03220162203834276&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Line%20stable%20-no%20problem%20found&serviceInfoChar282=Line%20stable%20-no%20problem%20found&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Line%20stable%20-no%20problem%20found"
                  >
                    <b>Line stable /no problem found</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Unavailable-%20customer%20request&srTypeId=102001047&t=1699276526747&tabId=sr0.8228936657478636&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Unavailable-%20customer%20request&serviceInfoChar282=Unavailable-%20customer%20request&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Unavailable-%20customer%20request"
                  >
                    <b>Customer not available - schedule in comment</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Other&srTypeId=102001005&t=1588105970481&tabId=sr0.8150058301507606&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Other&serviceInfoChar282=Other&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Ticket%20closed%20with%20close%20code%20xxxx"
                  >
                    <b>External problem- cable maintenance needed</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=CPE%20Problem&srTypeId=102001013&t=1607267204788&tabId=sr0.9321540272258382&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=CPE%20Problem&serviceInfoChar282=CPE%20Problem&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=CPE%20Problem"
                  >
                    <b>CPE customer problem</b>
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Engineering%20Inspection-Transfer%20To%20Exchange&srTypeId=102001028&t=1668616559462&tabId=sr0.694241289426565&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Engineering%20Inspection-Transfer%20To%20Exchange&serviceInfoChar282=Engineering%20Inspection-Transfer%20To%20Exchange&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Direct%20CST%20To%20Exchange."
                  >
                    <b>Engineering Inspection</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Installation%20Issue&srTypeId=102001044&t=1699276010341&tabId=sr0.48279185020067006&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Installation%20Issue&serviceInfoChar282=Installation%20Issue&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Installation%20Issue"
                  >
                    <b>Installation Issue</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Stalagmite%20problem&srTypeId=102001046&t=1699276482538&tabId=sr0.15769996458639746&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Stalagmite%20problem&serviceInfoChar282=Stalagmite%20problem&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Stalagmite%20problem"
                  >
                    <b>Stalagmite problem</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=IU-Resplitted&srTypeId=102001002&t=1701906512663&tabId=sr0.8937805785828663&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=IU-Resplitted&serviceInfoChar282=IU-Resplitted&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent="
                  >
                    <b>IU-Resplitted</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Other&srTypeId=102001005&t=1588105970481&tabId=sr0.8150058301507606&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Other&serviceInfoChar282=Other&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Ticket%20closed%20with%20close%20code%20xxxx"
                  >
                    <b>Other</b>
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="dropdown">
              <button
                className="btn btn-primary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Logical Cases
              </button>
              <ul className="dropdown-menu">
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Other&srTypeId=102012008&t=1588105970887&tabId=sr0.5307017905141844&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Other&serviceInfoChar282=Other&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Ticket%20closed%20with%20no%20suitable%20close%20code."
                    target="_blank"
                  >
                    <b>Slowness Other</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Other&srTypeId=102033004&t=1588114908808&tabId=sr0.9827029979924224&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Other&serviceInfoChar282=Other&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Ticket%20closed%20with%20no%20suitable%20close%20code"
                    target="_blank"
                  >
                    <b>Logical Instability Other</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Other&srTypeId=102047001&t=1588114939062&tabId=sr0.5243845880410583&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Other&serviceInfoChar282=Other&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Ticket%20closed%20with%20no%20suitable%20close%20code"
                    target="_blank"
                  >
                    <b>Browsing Other</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Other&srTypeId=102008006&t=1588105970768&tabId=sr0.7252583321545502&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Other&serviceInfoChar282=Other&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Ticket%20closed%20with%20no%20suitable%20close%20code"
                    target="_blank"
                  >
                    <b>Unable To Obtain Other</b>
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="dropdown">
              <button
                className="btn btn-primary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Gaming Cases
              </button>
              <ul className="dropdown-menu">
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Solved%20By%20MTU%20-%20Gaming%20Queue&srTypeId=134001003&t=1644328501938&tabId=sr0.13456677655172689&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Solved%20By%20MTU%20-%20Gaming%20Queue&serviceInfoChar282=Solved%20By%20MTU%20-%20Gaming%20Queue&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=cst%20problem%20solved%20after%20Adjust%20MTU"
                    target="_blank"
                  >
                    <b>Gamming MTU</b>
                    <b></b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Solved%20By%20DNS%20-%20Gaming%20Queue&srTypeId=134001004&t=1644402285487&tabId=sr0.576087839937264&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Solved%20By%20DNS%20-%20Gaming%20Queue&serviceInfoChar282=Solved%20By%20DNS%20-%20Gaming%20Queue&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=cst%20problem%20solved%20after%20Adjust%20DNS"
                    target="_blank"
                  >
                    <b>Gamming DNS</b>
                    <b></b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Choosing%20Nearest%20Server&srTypeId=134001005&t=1644402699426&tabId=sr0.1017234935517386&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Choosing%20Nearest%20Server&serviceInfoChar282=Choosing%20Nearest%20Server&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Solved%20by%20Choosing%20Nearest%20Server"
                    target="_blank"
                  >
                    <b>Choosing Nearest Server</b>
                    <b></b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Game%20Requirements&srTypeId=134002001&t=1644404203093&tabId=sr0.5672297343903319&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&BMEWebToken=&serviceTitle=Game%20Requirements&serviceInfoChar282=Game%20Requirements&serviceContent=inf%20cst%20that%20problem%20because%20of%20Game%20Requirements"
                    target="_blank"
                  >
                    <b>Game Requirements</b>
                    <b></b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Change%20Game%20Settings&srTypeId=134003001&t=1644413588016&tabId=sr0.7436843075701305&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&BMEWebToken=&serviceTitle=Change%20Game%20Settings&serviceInfoChar282=Change%20Game%20Settings&serviceContent=Solved%20after%20Change%20Game%20Settings"
                    target="_blank"
                  >
                    <b>Change Game Settings</b>
                    <b></b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=WIFI%20Channel&srTypeId=134004001&t=1644413790630&tabId=sr0.28967992219457916&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&BMEWebToken=&serviceTitle=WIFI%20Channel&serviceInfoChar282=WIFI%20Channel&serviceContent=Solved%20after%20change%20WIFI%20Channel"
                    target="_blank"
                  >
                    <b>WIFI Channel</b>
                    <b></b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Reduce%C2%A0%20Devices&srTypeId=134004002&t=1644413926374&tabId=sr0.08544960444848071&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&BMEWebToken=&serviceTitle=Reduce%20Devices&serviceInfoChar282=Reduce%20Devices&serviceContent=Solved%20after%20Reduce%20Devices"
                    target="_blank"
                  >
                    <b>Reduce Devices</b>
                    <b></b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Abnormal%20Traffic&srTypeId=134004003&t=1644414344046&tabId=sr0.8395314842184851&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&BMEWebToken=&serviceTitle=Abnormal%20Traffic&serviceInfoChar282=Abnormal%20Traffic&serviceContent=Solved%20after%20Reduce%20Abnormal%20Traffic"
                    target="_blank"
                  >
                    <b>Abnormal Traffic</b>
                    <b></b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Another%20Technical%20Case%20Handled&srTypeId=134005001&t=1644414444985&tabId=sr0.45167382342260765&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&BMEWebToken=&serviceTitle=Another%20Technical%20Case%20Handled&serviceInfoChar282=Another%20Technical%20Case%20Handled&serviceContent=Another%20Technical%20Case%20Handled"
                    target="_blank"
                  >
                    <b>Another Technical Case Handled</b>
                    <b></b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Not%20Solved%20Case%20-%20Script%20Delivered&srTypeId=134006001&t=1644523715910&tabId=sr0.5803272534524042&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Not%20Solved%20Case%20-%20Script%20Delivered&serviceInfoChar282=Not%20Solved%20Case%20-%20Script%20Delivered&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent=Not%20Solved%20Case%20-%20Script%20Delivered"
                    target="_blank"
                  >
                    <b>Not Solved Case - Script Delivered</b>
                    <b></b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=WIFI%20Frequency&srTypeId=134004004&t=1644526427571&tabId=sr0.69220892729861&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&BMEWebToken=&serviceTitle=WIFI%20Frequency&serviceInfoChar282=WIFI%20Frequency&serviceContent=WIFI%20Frequency%20Handled"
                    target="_blank"
                  >
                    <b>WIFI Frequency</b>
                    <b></b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Solved%20with%20Cable&srTypeId=134004005&t=1644526532060&tabId=sr0.7888809263234033&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&BMEWebToken=&serviceTitle=Solved%20with%20Cable&serviceInfoChar282=Solved%20with%20Cable&serviceContent=Solved%20with%20Cable"
                    target="_blank"
                  >
                    <b>Solved with Cable</b>
                    <b></b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Router%20Compatibility&srTypeId=134004006&t=1644527086606&tabId=sr0.44798326124290666&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&BMEWebToken=&serviceTitle=Router%20Compatibility,%20Location%20etc&serviceInfoChar282=Router%20Compatibility,%20Location%20etc&serviceContent=inf%20cst%20that%20problem%20related%20to%20Router%20Compatibility,%20Location%20etc%20Handled"
                    target="_blank"
                  >
                    <b>Router Compatibility, Location etc</b>
                    <b></b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Escalated&srTypeId=134001006&t=1644527457867&tabId=sr0.1361702712569841&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&BMEWebToken=&serviceTitle=Escalated&serviceInfoChar282=Escalated&serviceContent=Case%20Escalated"
                    target="_blank"
                  >
                    <b>Escalated</b>
                    <b></b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Outage&srTypeId=134007001&t=1644527778100&tabId=sr0.5569201535692814&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&BMEWebToken=&serviceTitle=Outage&serviceInfoChar282=Outage&serviceContent=inf%20cst%20about%20game%20Global%20Problem"
                    target="_blank"
                  >
                    <b>Outage</b>
                    <b></b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Game%20Update%20Failure%20-%20Need%20update%20etc&srTypeId=134008001&t=1644527905149&tabId=sr0.7448855723426064&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&BMEWebToken=&serviceTitle=Game%20Update%20Failure%20-%20Need%20update%20etc&serviceInfoChar282=Game%20Update%20Failure%20-%20Need%20update%20etc&serviceContent=Game%20Update%20Failure%20-%20Need%20update%20etc"
                    target="_blank"
                  >
                    <b>Game Update Failure - Need update etc</b>
                    <b></b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Min.%20requirements&srTypeId=134009001&t=1644528119014&tabId=sr0.06846767328056158&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&BMEWebToken=&serviceTitle=Min.%20requirements&serviceInfoChar282=Min.%20requirements&serviceContent=inf%20cst%20that%20problem%20because%20of%20Min.%20requirements%20Handled"
                    target="_blank"
                  >
                    <b>Min. requirements</b>
                    <b></b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Missing%20Files&srTypeId=134009002&t=1644528357399&tabId=sr0.8451543602607963&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&BMEWebToken=&serviceTitle=Missing%20Files&serviceInfoChar282=Missing%20Files&serviceContent=inf%20cst%20that%20it's%20a%20Missing%20Files%20problem%20Handled"
                    target="_blank"
                  >
                    <b>Missing Files</b>
                    <b></b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Re-Install&srTypeId=134009003&t=1644528477359&tabId=sr0.2793456134258434&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&BMEWebToken=&serviceTitle=Re-Install&serviceInfoChar282=Re-Install&serviceContent=Solved%20after%20Re-Install%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20inf%20cst%20to%20Re-Install"
                    target="_blank"
                  >
                    <b>Re-Install</b>
                    <b></b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Cache%20-%C2%A0%20Data%20files%20-%20background%20apps&srTypeId=134010001&t=1644528663152&tabId=sr0.11604299562637332&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&BMEWebToken=&serviceTitle=Cache%20-%20Data%20files%20-%20background%20apps&serviceInfoChar282=Cache%20-%20Data%20files%20-%20background%20apps&serviceContent=inf%20cst%20to%20Delete%20Cache%20%20%20%20%20%20%20%20%20-%20%20%20%20%20%20%20%20Data%20files%20%20%20%20%20%20%20%20%20-%20%20%20%20%20%20%20%20%20background%20apps%20problem%20handled"
                    target="_blank"
                  >
                    <b>Cache - Data files - background apps</b>
                    <b></b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=online%20games%20&%20High%20Ping&srTypeId=102007003&t=1644528997319&tabId=sr0.3599168448930481&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&BMEWebToken=&serviceTitle=online%20games%20&%20High%20Ping&serviceInfoChar282=online%20games%20&%20High%20Ping&serviceContent=after%20Done%20all%20needed%20TS%20cst%20still%20has%20online%20games%20issue%20&%20High%20Ping"
                    target="_blank"
                  >
                    <b>online games & High Ping</b>
                    <b></b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Rapier%20Emulator&srTypeId=134009004&t=1644529247655&tabId=sr0.9116110616936295&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&BMEWebToken=&serviceTitle=Rapier%20Emulator&serviceInfoChar282=Rapier%20Emulator&serviceContent=inf%20cst%20to%20Rapier%20the%20Emulator%20Handled%20%20%20%20%20%20%20%20%20%20%20Solved%20after%20Rapier%20Emulator"
                    target="_blank"
                  >
                    <b>Rapier Emulator</b>
                    <b></b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Air%20plane%20mode&srTypeId=134001007&t=1644529480382&tabId=sr0.5150185872293773&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&BMEWebToken=&serviceTitle=​Air%20plane%20mode&serviceInfoChar282=​Air%20plane%20mode&serviceContent=Solved%20by%20​Air%20plane%20mode"
                    target="_blank"
                  >
                    <b>​Air plane mode</b>
                    <b></b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Change%20Line%20Code&srTypeId=134001008&t=1644529758728&tabId=sr0.690291260006241&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&BMEWebToken=&serviceTitle=Change%20Line%20Code&serviceInfoChar282=Change%20Line%20Code&serviceContent=Problem%20Solved%20after%20Change%20Line%20Code"
                    target="_blank"
                  >
                    <b>Change Line Code</b>
                    <b></b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Reset%20and%20Configuration&srTypeId=134001009&t=1644529856636&tabId=sr0.8677011093103362&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&BMEWebToken=&serviceTitle=Reset%20and%20Configuration&serviceInfoChar282=Reset%20and%20Configuration&serviceContent=Solved%20After%20Reset%20and%20Configuration"
                    target="_blank"
                  >
                    <b>Reset and Configuration</b>
                    <b></b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Customer%20Not%20Available&srTypeId=134011001&t=1644529962401&tabId=sr0.09110246060886906&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&BMEWebToken=&serviceTitle=Customer%20Not%20Available&serviceInfoChar282=Customer%20Not%20Available&serviceContent=Customer%20Not%20Available"
                    target="_blank"
                  >
                    <b>Customer Not Available</b>
                    <b></b>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <br />
        <br />
        <hr />

        <div className="container">
          <div className="title-section">
            <h1 className="srSection-title">Major Fault Problem</h1>
          </div>

          <div className="sr-Container">
            <div className="dropdown">
              <button
                className="btn btn-danger dropdown-toggle"
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
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Major%20Fault&srTypeId=102034011&t=1701902966914&tabId=sr0.2423377159337109&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Major%20Fault&serviceInfoChar282=Major%20Fault&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent="
                  >
                    <b>Major Fault</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Major%20Fault%20within%20SLA&srTypeId=102034025&t=1701903014262&tabId=sr0.999339568010798&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Major%20Fault%20within%20SLA&serviceInfoChar282=Major%20Fault%20within%20SLA&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent="
                  >
                    <b>Major Fault within SLA</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Major%20Fault%20after%20SLA&srTypeId=102034023&t=1701903014292&tabId=sr0.9587642885601209&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Major%20Fault%20after%20SLA&serviceInfoChar282=Major%20Fault%20after%20SLA&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent="
                  >
                    <b>Major Fault After SLA</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Major%20Fault%20Problem%20Solved&srTypeId=102034043&t=1701903014316&tabId=sr0.345610795591351&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Major%20Fault%20Problem%20Solved&serviceInfoChar282=Major%20Fault%20Problem%20Solved&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent="
                  >
                    <b>Major Fault Problem Solved</b>
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="dropdown">
              <button
                className="btn btn-danger dropdown-toggle"
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
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Major%20Fault&srTypeId=102006008&t=1701903102356&tabId=sr0.6097363756597098&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Major%20Fault&serviceInfoChar282=Major%20Fault&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent="
                  >
                    <b>Major Fault</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Major%20Fault%20within%20SLA&srTypeId=102006024&t=1701903102405&tabId=sr0.3952062603537093&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Major%20Fault%20within%20SLA&serviceInfoChar282=Major%20Fault%20within%20SLA&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent="
                  >
                    <b>Major Fault within SLA</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Major%20Fault%20after%20SLA&srTypeId=102006022&t=1701903102383&tabId=sr0.056912748757143805&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Major%20Fault%20after%20SLA&serviceInfoChar282=Major%20Fault%20after%20SLA&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent="
                  >
                    <b>Major Fault After SLA</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Major%20Fault%20Problem%20Solved&srTypeId=102006042&t=1701903102429&tabId=sr0.0632864018152055&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Major%20Fault%20Problem%20Solved&serviceInfoChar282=Major%20Fault%20Problem%20Solved&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent="
                  >
                    <b>Major Fault Problem Solved</b>
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="dropdown">
              <button
                className="btn btn-danger dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Voice Down
              </button>
              <ul className="dropdown-menu">
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Major%20Fault&srTypeId=102005008&t=1701903281274&tabId=sr0.6894905939693527&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Major%20Fault&serviceInfoChar282=Major%20Fault&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent="
                  >
                    <b>Major Fault</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Major%20Fault%20within%20SLA&srTypeId=102005013&t=1701903281319&tabId=sr0.7874231293267928&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Major%20Fault%20within%20SLA&serviceInfoChar282=Major%20Fault%20within%20SLA&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent="
                  >
                    <b>Major Fault within SLA</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Major%20Fault%20after%20SLA&srTypeId=102005011&t=1701903281299&tabId=sr0.9107521428639284&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Major%20Fault%20after%20SLA&serviceInfoChar282=Major%20Fault%20after%20SLA&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent="
                  >
                    <b>Major Fault After SLA</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Major%20Fault%20Problem%20Solved&srTypeId=102005038&t=1701903281336&tabId=sr0.5766748603508682&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Major%20Fault%20Problem%20Solved&serviceInfoChar282=Major%20Fault%20Problem%20Solved&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent="
                  >
                    <b>Major Fault Problem Solved</b>
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="dropdown">
              <button
                className="btn btn-danger dropdown-toggle"
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
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Major%20Fault&srTypeId=102004008&t=1701903397629&tabId=sr0.3898005914677869&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Major%20Fault&serviceInfoChar282=Major%20Fault&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent="
                  >
                    <b>Major Fault</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Major%20Fault%20within%20SLA&srTypeId=102004009&t=1701903397658&tabId=sr0.3103874372947404&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Major%20Fault%20within%20SLA&serviceInfoChar282=Major%20Fault%20within%20SLA&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent="
                  >
                    <b>Major Fault within SLA</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Major%20Fault%20after%20SLA&srTypeId=102004010&t=1701903397680&tabId=sr0.6898548112944666&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Major%20Fault%20after%20SLA&serviceInfoChar282=Major%20Fault%20after%20SLA&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent="
                  >
                    <b>Major Fault After SLA</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Major%20Fault%20Problem%20Solved&srTypeId=102004022&t=1701903397701&tabId=sr0.8273371939055107&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Major%20Fault%20Problem%20Solved&serviceInfoChar282=Major%20Fault%20Problem%20Solved&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent="
                  >
                    <b>Major Fault Problem Solved</b>
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="dropdown">
              <button
                className="btn btn-danger dropdown-toggle"
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
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Major%20Fault&srTypeId=102014010&t=1701903515333&tabId=sr0.8039226212965987&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Major%20Fault&serviceInfoChar282=Major%20Fault&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent="
                  >
                    <b>Major Fault</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Major%20Fault%20within%20SLA&srTypeId=102014024&t=1701903515357&tabId=sr0.138659035075677&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Major%20Fault%20within%20SLA&serviceInfoChar282=Major%20Fault%20within%20SLA&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent="
                  >
                    <b>Major Fault within SLA</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Major%20Fault%20after%20SLA&srTypeId=102014022&t=1701903515386&tabId=sr0.13872391609683976&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Major%20Fault%20after%20SLA&serviceInfoChar282=Major%20Fault%20after%20SLA&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent="
                  >
                    <b>Major Fault After SLA</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Major%20Fault%20Problem%20Solved&srTypeId=102014042&t=1701903515409&tabId=sr0.2199236113383667&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Major%20Fault%20Problem%20Solved&serviceInfoChar282=Major%20Fault%20Problem%20Solved&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent="
                  >
                    <b>Major Fault Problem Solved</b>
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="dropdown">
              <button
                className="btn btn-danger dropdown-toggle"
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
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Major%20Fault&srTypeId=102040011&t=1701903613705&tabId=sr0.39398025064371833&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Major%20Fault&serviceInfoChar282=Major%20Fault&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent="
                    target="_blank"
                  >
                    <b>Major Fault</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Major%20Fault%20within%20SLA&srTypeId=102040026&t=1701903613732&tabId=sr0.789532207359568&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Major%20Fault%20within%20SLA&serviceInfoChar282=Major%20Fault%20within%20SLA&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent="
                    target="_blank"
                  >
                    <b>Major Fault within SLA</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Major%20Fault%20after%20SLA&srTypeId=102040024&t=1701903613750&tabId=sr0.5203021822228242&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Major%20Fault%20after%20SLA&serviceInfoChar282=Major%20Fault%20after%20SLA&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent="
                    target="_blank"
                  >
                    <b>Major Fault After SLA</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Major%20Fault%20Problem%20Solved&srTypeId=102040049&t=1701903613770&tabId=sr0.5556554948344054&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Major%20Fault%20Problem%20Solved&serviceInfoChar282=Major%20Fault%20Problem%20Solved&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent="
                    target="_blank"
                  >
                    <b>Major Fault Problem Solved</b>
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="dropdown">
              <button
                className="btn btn-danger dropdown-toggle"
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
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Major%20Fault&srTypeId=102042002&t=1701903735884&tabId=sr0.08018250924953085&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Major%20Fault&serviceInfoChar282=Major%20Fault&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent="
                  >
                    <b>Major Fault</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Major%20Fault%20within%20SLA&srTypeId=102001008&t=1701903735932&tabId=sr0.6608393789263495&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Major%20Fault%20within%20SLA&serviceInfoChar282=Major%20Fault%20within%20SLA&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent="
                  >
                    <b>Major Fault within SLA</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Major%20Fault%20after%20SLA&srTypeId=102042003&t=1701903735912&tabId=sr0.12126425560467635&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Major%20Fault%20after%20SLA&serviceInfoChar282=Major%20Fault%20after%20SLA&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent="
                  >
                    <b>Major Fault After SLA</b>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Major%20Fault%20Problem%20Solved&srTypeId=102001030&t=1701903735953&tabId=sr0.3164599614714644&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=Major%20Fault%20Problem%20Solved&serviceInfoChar282=Major%20Fault%20Problem%20Solved&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent="
                  >
                    <b>Major Fault Problem Solved</b>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <br />
        <hr />

        <div className="container">
          <div className="title-section">
            <h1 className="srSection-title">Electricity Issue</h1>
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
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=CST%20cannot%20troubleshoot%20-%20Electricity%20Issue&srTypeId=102034065&t=1702684362419&tabId=sr0.15652265640970786&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=CST%20cannot%20troubleshoot%20-%20Electricity%20Issue&serviceInfoChar282=CST%20cannot%20troubleshoot%20-%20Electricity%20Issue&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent="
                  >
                    <b>CST cannot troubleshoot - Electricity Issue</b>
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
                Voice Down
              </button>
              <ul className="dropdown-menu">
                <li>
                  <NavLink
                    className="dropdown-item"
                    target="_blank"
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=CST%20cannot%20troubleshoot%20-%20Electricity%20Issue&srTypeId=102005058&t=1702684362520&tabId=sr0.2962791371859943&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=CST%20cannot%20troubleshoot%20-%20Electricity%20Issue&serviceInfoChar282=CST%20cannot%20troubleshoot%20-%20Electricity%20Issue&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent="
                  >
                    <b>CST cannot troubleshoot - Electricity Issue</b>
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
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=CST%20cannot%20troubleshoot%20-%20Electricity%20Issue&srTypeId=102006062&t=1702684362536&tabId=sr0.6175042651094287&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=CST%20cannot%20troubleshoot%20-%20Electricity%20Issue&serviceInfoChar282=CST%20cannot%20troubleshoot%20-%20Electricity%20Issue&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent="
                  >
                    <b>CST cannot troubleshoot - Electricity Issue</b>
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
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=CST%20cannot%20troubleshoot%20-%20Electricity%20Issue&srTypeId=102004034&t=1702684362503&tabId=sr0.13667874975474115&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=CST%20cannot%20troubleshoot%20-%20Electricity%20Issue&serviceInfoChar282=CST%20cannot%20troubleshoot%20-%20Electricity%20Issue&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent="
                  >
                    <b>CST cannot troubleshoot - Electricity Issue</b>
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
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=CST%20cannot%20troubleshoot%20-%20Electricity%20Issue&srTypeId=102014064&t=1702684362629&tabId=sr0.04187718260778195&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=CST%20cannot%20troubleshoot%20-%20Electricity%20Issue&serviceInfoChar282=CST%20cannot%20troubleshoot%20-%20Electricity%20Issue&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent="
                  >
                    <b>CST cannot troubleshoot - Electricity Issue</b>
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
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=CST%20cannot%20troubleshoot%20-%20Electricity%20Issue&srTypeId=102040071&t=1702684362950&tabId=sr0.017655222044642538&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=CST%20cannot%20troubleshoot%20-%20Electricity%20Issue&serviceInfoChar282=CST%20cannot%20troubleshoot%20-%20Electricity%20Issue&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent="
                    target="_blank"
                  >
                    <b>CST cannot troubleshoot - Electricity Issue</b>
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
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=CST%20cannot%20troubleshoot%20-%20Electricity%20Issue&srTypeId=102001049&t=1702684362446&tabId=sr0.5026083405633522&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=CST%20cannot%20troubleshoot%20-%20Electricity%20Issue&serviceInfoChar282=CST%20cannot%20troubleshoot%20-%20Electricity%20Issue&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent="
                  >
                    <b>CST cannot troubleshoot - Electricity Issue</b>
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
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=CST%20cannot%20troubleshoot%20-%20Electricity%20Issue&srTypeId=102033022&t=1702684362646&tabId=sr0.37711049583898126&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=CST%20cannot%20troubleshoot%20-%20Electricity%20Issue&serviceInfoChar282=CST%20cannot%20troubleshoot%20-%20Electricity%20Issue&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent="
                  >
                    <b>CST cannot troubleshoot - Electricity Issue</b>
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
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=CST%20cannot%20troubleshoot%20-%20Electricity%20Issue&srTypeId=102008033&t=1702684362554&tabId=sr0.7168138959141613&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=CST%20cannot%20troubleshoot%20-%20Electricity%20Issue&serviceInfoChar282=CST%20cannot%20troubleshoot%20-%20Electricity%20Issue&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent="
                  >
                    <b>CST cannot troubleshoot - Electricity Issue</b>
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
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=CST%20cannot%20troubleshoot%20-%20Electricity%20Issue&srTypeId=102047022&t=1702684362874&tabId=sr0.3191127353771612&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=CST%20cannot%20troubleshoot%20-%20Electricity%20Issue&serviceInfoChar282=CST%20cannot%20troubleshoot%20-%20Electricity%20Issue&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent="
                  >
                    <b>CST cannot troubleshoot - Electricity Issue</b>
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
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=CST%20cannot%20troubleshoot%20-%20Electricity%20Issue&srTypeId=102012032&t=1702684362611&tabId=sr0.3290994405401746&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=CST%20cannot%20troubleshoot%20-%20Electricity%20Issue&serviceInfoChar282=CST%20cannot%20troubleshoot%20-%20Electricity%20Issue&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent="
                  >
                    <b>CST cannot troubleshoot - Electricity Issue</b>
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
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=Electricity%20Issue&srTypeId=102046005&t=1702684362666&tabId=sr0.5702835638789083&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=CST%20cannot%20troubleshoot%20-%20Electricity%20Issue&serviceInfoChar282=CST%20cannot%20troubleshoot%20-%20Electricity%20Issue&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent="
                  >
                    <b>CST cannot troubleshoot - Electricity Issue</b>
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
                    to="https://bss.te.eg:12900/csp/sr/business.action?BMEBusiness=srNewSrPage&srTypeName=CST%20cannot%20troubleshoot%20-%20Electricity%20Issue&srTypeId=102048014&t=1702684362979&tabId=sr0.08879083605922156&topUrl=&custid=&serviceInfoChar107=2&serviceInfoChar111=1&subsNumber=FBB&BMEWebToken=&serviceTitle=CST%20cannot%20troubleshoot%20-%20Electricity%20Issue&serviceInfoChar282=CST%20cannot%20troubleshoot%20-%20Electricity%20Issue&serviceInfoChar276=1&serviceInfoChar278=1&serviceInfoChar272=0&serviceContent="
                  >
                    <b>CST cannot troubleshoot - Electricity Issue</b>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <br />
        <br />
        <hr />
      </section>
    </>
  );
};

export default SRs;
