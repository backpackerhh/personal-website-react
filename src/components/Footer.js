import React from "react";
import { useTranslation } from "react-i18next";

import withSuspense from "../utils/withSuspense";

const Footer = () => {
  const { t } = useTranslation("footer");
  const year = new Date().getFullYear();

  return (
    <>
      <div className="ui divider"></div>

      <div className="ui computer reversed center aligned three column grid">
        <div className="middle aligned row">
          <div className="sixteen wide mobile sixteen wide tablet four wide computer column">
            <div className="ui tiny label">
              <p>
                <i className="github alternate large icon"></i>
                {t("source_code")}
                <a href="https://github.com/backpackerhh/personal-website-react">GitHub</a>
              </p>
            </div>
          </div>

          <div className="sixteen wide mobile sixteen wide tablet eight wide computer column">
            <p id="license">
              <small>
                <span id="copyleft">&copy;</span> {year} David Montesdeoca. {t("under_license")}
                <a href="http://choosealicense.com/licenses/gpl-3.0/">GNU GPLv3</a>
              </small>
            </p>
          </div>

          <div className="four wide computer only column"></div>
        </div>
      </div>
    </>
  );
};

export default withSuspense(Footer);
