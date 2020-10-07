import React from "react";
import Breadcrumb from "./Breadcrumb";
import Heroheader from "./Heroheader";
import Companyinfo from "./Companyinfo";

function Mainhero() {
  return (
    <>
      <section className="main_hero center ">
        <div className="hero-container">
          <Breadcrumb />
          <Heroheader />
          <Companyinfo />
        </div>
      </section>
    </>
  );
}
export default Mainhero;
