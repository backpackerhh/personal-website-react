import React from "react";

import Header from "./Header";
import About from "./About";
import Footer from "./Footer";
import "./App.scss";

const App = () => {
  return (
    <>
      <header role="banner">
        <Header />
      </header>

      <main role="main">
        <About />
      </main>

      <footer role="contentinfo">
        <Footer />
      </footer>
    </>
  );
};

export default App;
