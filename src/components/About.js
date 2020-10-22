import React from "react";
import { useTranslation } from "react-i18next";

import withSuspense from "../utils/withSuspense";

const About = () => {
  const { t } = useTranslation("about");

  return "About";
};

export default withSuspense(About);
