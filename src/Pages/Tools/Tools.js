import React from "react";
import { NavLink } from "react-router-dom";
import "./Tools.css";

const Tools = () => {
  return (
    <>
      <section className="tools-section container">
        <div className="tools">
          

          
            <NavLink className="tools-button"
              
              to="https://bss.te.eg:12900/csp/sr/query.action?bmeEvent.view=/usl/sr/srtype/srTypeFrame_upc.usl&bmeEvent.model=spring:sr_showSrTypeFlatWindowVoService&bmeEvent.service=BMERoot.doGetMainWindowPageMethod()&showHot=false&forceAllSelected=false&multiSelect=true&showRelatedInfo=true&leafSelectOnly=true&maxShowLevel=20&defaultSrTypeId=&beginShowLevel=3&checkOrgaAuth=false&checkCityAuth=false&checkValidity=false&useHiddenFunc=false&flag=true&topUrl=&subsNumber=&BMEWebToken="
              target="_blank"
            >
              Handle Request
            </NavLink>

            <NavLink className="tools-button"
              
              to="https://bss.te.eg:12900/csp/pbh/business.action?BMEBusiness=srQueryAction&subsNumber= "
              target="_blank"
            >
              Query Request
            </NavLink>
        
            <NavLink className="tools-button"
              to="http://tts/new/index.php/tickets/tickets_assigned"
              target="_blank"
            >
              TTS Assigned
            </NavLink>
          

          
            <NavLink className="tools-button"
              to="https://10.19.44.2/ireport/test/digital_chat/_sls_reports_list.php"
              target="_blank"
            >
              Follow up I-Report
            </NavLink>
          

            <NavLink className="tools-button" to="https://10.190.250.118/Home/Index" target="_blank">
              Customer360
            </NavLink>
          

            <NavLink className="tools-button"
              to="https://wiki/SiteAssets/ADSL-New-Process/index.php/start/digital_scenario/117e.html?1J5A1701900965325"
              target="_blank"
            >
              Gaming TKT Maker
            </NavLink>
          

            <NavLink className="tools-button"
              to="https://wiki/SiteAssets/ADSL-New-Process/index.php/start/scenario/118e.html"
              target="_blank"
            >
              Phys.Contradiction TKT Maker
            </NavLink>
          

            <NavLink className="tools-button"
              to="https://wiki/SiteAssets/ADSL-New-Process/index_digital.html"
              target="_blank"
            >
              Technical Ticket Maker
            </NavLink>
          

            <NavLink className="tools-button" to="http://matrix/cc_searchcustomerno.php" target="_blank">
              Matrix - Customer Name
            </NavLink>
          

            <NavLink className="tools-button"
              to="http://matrix/subscriber_database_logs.php"
              target="_blank"
            >
              Matrix - NST Logs
            </NavLink>
          

            <NavLink className="tools-button"
              to="http://tts/new/index.php/static_pages/Search_tickets"
              target="_blank"
            >
              TTS - Search Tickets
            </NavLink>
          

            <NavLink className="tools-button"
              to="https://10.42.187.100:8080/expresse/login-page?sessionExpired=true"
              target="_blank"
            >
              Dzs Exprience (ASSIA)
            </NavLink>
          

            <NavLink className="tools-button"
              to="https://10.99.105.177:8080/#/subscribe"
              target="_blank"
            >
              HDM Portal
            </NavLink>
          

            <NavLink className="tools-button"
              to="https://10.19.44.2/ireport/api/haya_karima.html"
              target="_blank"
            >
              Hayah Karima Checker
            </NavLink>
          

            <NavLink className="tools-button"
              to="https://10.19.44.2/ireport/cases/gaming_q_leaders_search.php"
              target="_blank"
            >
              Gaming I-Report
            </NavLink>
          

            <NavLink className="tools-button" to="https://10.19.36.5/mainpage.aspx" target="_blank">
              TE Billing
            </NavLink>
          

            <NavLink className="tools-button" to="http://10.19.5.17/Default.aspx" target="_blank">
              TE Billing OSS
            </NavLink>
          

            <NavLink className="tools-button"
              to="https://bss.te.eg:12900/oc/bes/sm/login/operator_ctz.html?timestamp=1651145302413"
              target="_blank"
            >
              BES Portal
            </NavLink>
          

            <NavLink className="tools-button"
              to="https://teleopti.tedata.net/teleoptiwfm/web/mytime#Schedule/Week"
              target="_blank"
            >
              TeleOpti WFM
            </NavLink>
          

            <NavLink className="tools-button" to="http://qms/Default.aspx" target="_blank">
              QMS-Search Sheets
            </NavLink>
          

            <NavLink className="tools-button"
              to="https://fcc.te.eg/TroubleTicket/faces/security/pages/Login.jsf"
              target="_blank"
            >
              ADF Tool
            </NavLink>
          

            <NavLink className="tools-button"
              to="http://10.20.128.148/Tickets/Login.aspx"
              target="_blank"
            >
              UNMS Tool
            </NavLink>
          
        </div>
      </section>
    </>
  );
};

export default Tools;
