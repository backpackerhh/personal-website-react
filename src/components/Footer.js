import React from "react";
import { useTranslation } from "react-i18next";

import withSuspense from "../utils/withSuspense";

const Footer = () => {
  const { t } = useTranslation("footer");

  return "Footer";
};

export default withSuspense(Footer);
