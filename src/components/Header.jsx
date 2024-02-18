import React from "react";

import Language from "./Language";
import withSuspense from "../utils/withSuspense";

const Header = () => {
  return (
    <div className="ui center aligned two column vertically padded grid">
      <div className="row">
        <div className="six wide mobile only column"></div>
        <div className="ten wide tablet only column"></div>
        <div className="twelve wide computer only column"></div>
        <div className="ten wide mobile six wide tablet four wide computer column">
          <nav id="language-switcher">
            <ul className="ui horizontal divided list">
              <Language code="en" text="English" />
              <Language code="es" text="Español" />
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default withSuspense(Header);
