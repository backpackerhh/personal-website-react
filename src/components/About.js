import React from "react";
import { useTranslation } from "react-i18next";

import Social from "./Social";
import withSuspense from "../utils/withSuspense";

const About = () => {
  const { t } = useTranslation("about");

  return (
    <div className="ui center aligned container grid">
      <div className="row">
        <picture>
          <img
            src="images/davidmontesdeoca-200.png"
            alt="David Montesdeoca"
            className="ui centered circular image"
          />
        </picture>
      </div>

      <div className="row">
        <header>
          <h1 className="ui huge header">{t("greeting")}</h1>
          <p>{t("about_me")}</p>
        </header>
      </div>

      <div className="row">
        <Social />
      </div>
    </div>
  );
};

export default withSuspense(About);
