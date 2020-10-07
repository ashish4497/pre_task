import React from "react";
import { NavLink } from "react-router-dom";

function Heroheader() {
  return (
    <>
      <section className="container col-2-herro-header">
        <nav>
          <div className="main_links">
            <NavLink to="/about" activeClassName="active-link">
              About the Company
            </NavLink>
            <NavLink to="gallery" activeClassName="active-link">
              Product Gallery
            </NavLink>
            <NavLink to="/rating" activeClassName="active-link">
              Ratings & Reviews
            </NavLink>
          </div>
        </nav>
      </section>
    </>
  );
}
export default Heroheader;
