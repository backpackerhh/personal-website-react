import React from "react";

import Header from "./Header";
import About from "./About";
import Social from "./Social";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <header role="banner">
        <Header />
      </header>

      <main role="main">
        <About />
        <Social />
      </main>

      <footer role="contentinfo">
        <Footer />
      </footer>
    </>
  );
};

export default App;
