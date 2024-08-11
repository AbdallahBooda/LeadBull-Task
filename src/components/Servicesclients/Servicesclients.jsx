import { Link } from "react-router-dom";
import "./Servicesclients.css";
const Servicesclients = () => {
  return (
    <>
      <div className="container text-center mt-5 pt-5">
        <p className="ser-client-title">OVER $9 MILLION</p>
        <p className="text-white bold fs-3">
          In combined revenue generated for our contractor clients
        </p>
        <p className="text-white fs-4">
          Our services allow clients to gain a better chance of fulfilling
          customers <br />
          needs and catching their interest, Leading to higher net revenue and{" "}
          <br />
          sustained customer satisfaction and loyalty. Many top global <br />
          contractors<Link to="/"> Read more</Link>
        </p>
        <div className="d-flex justify-content-center p-5">
          {/* <div style={{ borderLeft: "3px solid #027FCA" }}> */}
          <div className="card ser-client-card w-75">
            <div className="card-body">
              <div className="row">
                <div className="col-md-3">
                  <div
                    style={{
                      boxShadow: " 1px 0px 0px 0px rgba(2, 127, 202, 1)",
                    }}
                  >
                    <p className="text-white fs-3 pb-0 mb-1">75+</p>
                    <p className="text-white fs-5">
                      Independent
                      <br />
                      Member Firms
                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div
                    style={{
                      boxShadow: " 1px 0px 0px 0px rgba(2, 127, 202, 1)",
                    }}
                  >
                    <p className="text-white fs-3 pb-0 mb-1">35+</p>
                    <p className="text-white fs-5">
                      Contracting
                      <br />
                      LLCs
                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div
                    style={{
                      boxShadow: " 1px 0px 0px 0px rgba(2, 127, 202, 1)",
                    }}
                  >
                    <p className="text-white fs-3 pb-0 mb-1">75+</p>
                    <p className="text-white fs-5">
                      Affiliate
                      <br /> Network
                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <p className="text-white fs-3 pb-0 mb-1">75+</p>
                  <p className="text-white fs-5">Countries</p>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default Servicesclients;
