import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../components/Logo/Logo";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-navbar fixed-top">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <Logo />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item p-3">
                <Link
                  className="nav-link active text-white linkstyle "
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item p-3">
                <Link
                  className="nav-link text-white linkstyle"
                  aria-current="page"
                  to="/"
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item p-3">
                <Link
                  className="nav-link text-white linkstyle"
                  aria-current="page"
                  to="/"
                >
                  Services
                </Link>
              </li>
              <li className="nav-item p-3">
                <Link
                  className="nav-link text-white linkstyle"
                  aria-current="page"
                  to="/"
                >
                  Support
                </Link>
              </li>
            </ul>

            {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"> */}
            <Link className="login-link" to="/">
              Login
            </Link>
            <Link
              className="Book-an-appointment m-2"
              to="/"
            >
              Book an appointment
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
