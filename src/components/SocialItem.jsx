import React from "react";

const SocialItem = ({ url, text, icon }) => {
  return (
    <div className="column">
      <a href={url}>
        <i className={`${icon} icon`}></i>

        <div className="content">{text}</div>
      </a>
    </div>
  );
};

export default SocialItem;
