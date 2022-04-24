import React from "react";
import i18n from "../i18next";

function LanguageChanger() {
  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <div className="container">
      <div className="language-box" onClick={() => changeLang("tr")}>
        TR
      </div>
      <div className="language-box" onClick={() => changeLang("en")}>
        EN
      </div>
      <div className="language-box" onClick={() => changeLang("fr")}>
        FR
      </div>
    </div>
  );
}

export default LanguageChanger;
