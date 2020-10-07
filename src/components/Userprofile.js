import React from "react";
import profile from "../media/profile.jpg";
import { NavLink, Link } from "react-router-dom";

function Userprofile() {
  return (
    <>
      <section className="user_profile">
        <div className="user_container center user-style-flex padding">
          <div className="user_info">
            <img src={profile} alt="user_profile"></img>
            <h3>Rohit Gupta</h3>
            <h4>Supplier, Sahara Fabrics Pvt. Ltd.</h4>
          </div>
          <div className="company_gstn margin">
            <p>Company GSTIN-12345678952</p>
          </div>
          <div className="location_info">
            <div>
              <span>
                <i className="fa fa-map-marker" aria-hidden="true"></i>
              </span>
              <p>New Delhi, India</p>
            </div>
            <div>
              <span>
                <i className="fa fa-star" aria-hidden="true"></i>
                <p>4.5 (209)</p>
              </span>
            </div>
            <div>
              <span>
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </span>
              <p>
                <Link to="#">rohit.gupta@gmail.com</Link>
              </p>
            </div>
          </div>
        </div>
        <section className="company_profile_section">
          <div className="company_profile margin">
            <NavLink to="/profile" activeClassName="activeBg">
              Company Profile{" "}
            </NavLink>
            <NavLink to="/deal" activeClassName="activeBg">
              Deal Requests & Wishlists
            </NavLink>
            <NavLink to="/clint" activeClassName="activeBg">
              Clients & Payments
            </NavLink>
            <NavLink
              to="/history"
              className="history"
              activeClassName="activeBg"
            >
              Chat history
            </NavLink>
          </div>
          <div className="setting-btn margin">
            <button className="btn">
              <i className="fa fa-cog" aria-hidden="true"></i> Edit Profile
            </button>
          </div>
          <div className="buy_link center">
            <p>
              Wish you to buy products?
              <Link to="#" className="more_link">
                click here
              </Link>
            </p>
          </div>
        </section>
      </section>
    </>
  );
}

export default Userprofile;
