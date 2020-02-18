import React from "react";

const App = () => {
  return (
    <div className="ui center aligned container grid" style={{ marginTop: "5%", fontSize: "21px" }}>
      <div className="row">
        <picture>
          <img
            src="/images/davidmontesdeoca-200.png"
            alt="David Montesdeoca"
            className="ui centered circular image"
          />
        </picture>
      </div>

      <div className="row">
        <header>
          <h1 className="ui huge header" data-testid="header">
            Hi! I'm David Montesdeoca
          </h1>
          <p>
            I'm a software developer from Las Palmas de Gran Canaria, Spain and currently living in
            Madrid.
          </p>
        </header>
      </div>

      <div className="row">
        <div className="ui massive message">
          <i className="info circle icon"></i>
          New site is coming soon...
        </div>
      </div>

      <div className="row">
        <p>
          Right now, if you want to know more about me, please check{" "}
          <a href="https://www.linkedin.com/in/backpackerhh">my LinkedIn profile</a>.
        </p>
      </div>
    </div>
  );
};

export default App;
