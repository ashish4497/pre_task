import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./About";
import Rating from "./Rating";
function Companyinfo() {
  return (
    <>
      <section className="container padding">
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/gallery">
            <h2>Product Gallery</h2>
          </Route>
          <Route path="/rating">
            <Rating />
          </Route>
          <Route path="/profile">
            <About />
          </Route>
          <Route path="/deal">
            <h2>Deal Requests & Wishlists</h2>
          </Route>
          <Route path="/clint">
            <h2>Clients & Payments</h2>
          </Route>
          <Route path="/history">
            <h2>Chat history</h2>
          </Route>
        </Switch>
      </section>
    </>
  );
}

export default Companyinfo;
