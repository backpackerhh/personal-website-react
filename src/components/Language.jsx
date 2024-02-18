import React from "react";
import { useTranslation } from "react-i18next";

const Language = ({ text, code }) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language.substring(0, 2);

  return (
    <li className="item" onClick={() => i18n.changeLanguage(code)}>
      {currentLanguage === code ? <strong>{text}</strong> : text}
    </li>
  );
};

export default Language;
