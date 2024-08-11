import "./Profile.css";
const Profile = () => {
  return (
    <>
      <div className="container ">
        <p className="pro-title text-center mb-0 pb-5"> PROFILE </p>
        <div className="row pt-5 ">
          <div className="col-md-4 ">
            <div
              className="card pro-card m-5"
              style={{ width: "15rem",  }}
            >
              <div className="card-body text-center">
                <h5 className="card-title">Vision</h5>

                <p className="card-text">
                  We enhance our data centers to personalize the contractor
                  clients experience through telemarketing
                </p>
              </div>
            </div>
            <div
              className="card pro-card m-5"
              style={{ width: "15rem",  }}
            >
              <div className="card-body text-center">
                <h5 className="card-title">Mission</h5>

                <p className="card-text">
                  Our mission is to be the leading innovator in the
                  telemarketing industry through our cloud based Lead-Gen
                  solutions
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-5 mb-0">
            <div
              className="card pro-card m-5"
              style={{ width: "15rem",  }}
            >
              <div className="card-body text-center">
                <h5 className="card-title">Values​</h5>

                <p className="card-text">
                  Our core values include elimination of privacy concerns, and
                  adherence to global marketing regulations
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <img src="home-slide.svg" className="w-100" />
            <p className="text-center  p-3 llc-text">LEADBULL LLC</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
