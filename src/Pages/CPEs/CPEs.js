import React from "react";
import "./CPEs.css";
import DG8045 from "./Photos/DG8045.jpg";
import ZTEH188A from "./Photos/ZXHN-H188A.jpg";
import VMG3625 from './Photos/VMG3625-T50B.jpg';
import VN020 from './Photos/Vn020.jpg';
import DN8245 from './Photos/DN8245V.png';
import ZTE from './Photos/ZTE-ZXHN-H168N.jpg';
import HG531 from './Photos/HG531.png';
import TPLinkVR from './Photos/VR600.jpg';
import { NavLink } from "react-router-dom";

const CPEs = () => {
  return (
    <>
      <section className="cpe-divisions">
        <div className="cpe-items">
          <div className="card">
            <img src={DG8045} className="card-img-top" alt="..." />
            <div className="card-body">
              <NavLink to="https://justpaste.it/3bh2s" target="_blank" className="btn btn-primary">
                Huawei DG8045
              </NavLink>
            </div>
          </div>

          <div className="card">
            <img src={DG8045} className="card-img-top" alt="..." />
            <div className="card-body">
              <NavLink to="https://wexdone.weebly.com/huawei-hg631-vdsl.html#/" target="_blank" className="btn btn-primary">
                Huawei HG630 - 633
              </NavLink>
            </div>
          </div>

          <div className="card">
            <img src={ZTEH188A} className="card-img-top" alt="..." />
            <div className="card-body">
              <NavLink to="https://wexdone.weebly.com/zte-h188a.html#/" target="_blank" className="btn btn-primary">
                ZTE H188A
              </NavLink>
            </div>
          </div>

          <div className="card">
            <img src={VMG3625} className="card-img-top" alt="..." />
            <div className="card-body">
              <NavLink to="https://wexdone.weebly.com/zyxel-vmg3625-t50b.html#/" target="_blank" className="btn btn-primary">
                ZYXEL VMG3625-T50B
              </NavLink>
            </div>
          </div>

          <div className="card">
            <img src={VN020} className="card-img-top" alt="..." />
            <div className="card-body">
              <NavLink to="https://wexdone.weebly.com/tp-link-vn020-f3.html#/ " target="_blank" className="btn btn-primary">
                TP-Link VN020 
              </NavLink>
            </div>
          </div>

          <div className="card">
            <img src={DN8245} className="card-img-top" alt="..." />
            <div className="card-body">
              <NavLink to="https://wexdone.weebly.com/huawei-dn-8245v10.html#/" target="_blank" className="btn btn-primary">
              Huawei DN8245V-56
              </NavLink>
            </div>
          </div>

          <div className="card">
            <img src={ZTE} className="card-img-top" alt="..." />
            <div className="card-body">
              <NavLink to="https://wexdone.weebly.com/zte-h108n.html#/" target="_blank" className="btn btn-primary">
              ZTE ZXHN H168N
              </NavLink>
            </div>
          </div>


          <div className="card">
            <img src={ZTE} className="card-img-top" alt="..." />
            <div className="card-body">
              <NavLink to="https://wexdone.weebly.com/zte-h108n-v25.html#/" target="_blank" className="btn btn-primary">
              ZTE ZXHN H108N
              </NavLink>
            </div>
          </div>



          <div className="card">
            <img src={HG531} className="card-img-top" alt="..." />
            <div className="card-body">
              <NavLink to="https://justpaste.it/3kdsc" target="_blank" className="btn btn-primary">
              Huawei HG531-532
              </NavLink>
            </div>
          </div>


          <div className="card">
            <img src={TPLinkVR} className="card-img-top" alt="..." />
            <div className="card-body">
              <NavLink to="https://wexdone.weebly.com/tplink-vr-series.html#/" target="_blank" className="btn btn-primary">
                TP-Link VR Series
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CPEs;
