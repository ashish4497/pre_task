import React from "react";
import "../style/App.scss";
import Header from "./Header";
import Userprofile from "./Userprofile";
import Mainhero from "./Mainhero";
import Footer from "./Footer";
function App() {
  return (
    <>
      <div className="App">
        <Header />
        <div className="main_hero_section grid">
          <Userprofile />
          <Mainhero />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
