import React from "react";
import { Link } from "react-router-dom";
function Rating() {
  return (
    <>
      <section className="container spacing">
        <div className="rating_reviews font left-text">
          <p>
            You have got no reviews! Message Current and Past Clients to provide
            Ratings & Reviews and enhance your profile!
          </p>
          <h3>Click on the below icon to message!</h3>
        </div>
        <div className="hero-icon">
          <Link to="#">
            <i className="fas fa-comment-alt"></i>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Rating;
