import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <section>
        <div className="container footer ">
          <div className="footer_section flex">
            <div className="col-3-row-1">
              <h3>Get in touch</h3>
            </div>
            <div className="col-3-row-2">
              <h4>Location</h4>
              <p>Bengaluru, Karnataka, India</p>
            </div>
            <div className="col-3-row-3">
              <h4>Contract</h4>
              <p>
                <Link to="#">support@pretva.com</Link>
              </p>
            </div>
            <div className="col-3-row-4">
              <h4>Follow</h4>
              <p>
                <Link to="#">
                  <i className="fab fa-facebook-f"></i>
                </Link>
              </p>
              <p>
                <Link to="#">
                  <i className="fab fa-instagram"></i>
                </Link>
              </p>
              <p>
                <Link to="#">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="copy-right">
          <small>
            <p>&copy; 2020 by pretVA</p>
          </small>
        </div>
      </section>
    </>
  );
}

export default Footer;
