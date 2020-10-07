import React from "react";
import { Link } from "react-router-dom";

export default function Aoutcompany() {
  return (
    <>
      <section className="container spacing">
        <div className="about_company font left-text">
          <p>
            Providing relavant information and details about your company and
            products you deal in will help potential clients trust your company
            and reach out for the right products!
          </p>
          <h3>Click on the icon below to get started!</h3>
        </div>
        <div className="hero-icon">
          <Link to="#">
            <i className="fas fa-plus-circle"></i>
          </Link>
        </div>
      </section>
    </>
  );
}
