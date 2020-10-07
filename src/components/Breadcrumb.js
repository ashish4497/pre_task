import React from "react";
import { Link } from "react-router-dom";

function Breadcrumb() {
  return (
    <>
      <div className="nav_links">
        <nav className="bread_crumb">
          <p className="active">
            <Link to="#">My Account</Link>/
          </p>
          <p>
            <Link to="#">Company Profile</Link>/
          </p>
          <p>
            <Link to="#">About the Company</Link>
          </p>
        </nav>
      </div>
    </>
  );
}

export default Breadcrumb;
