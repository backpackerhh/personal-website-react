import React from "react";

import SocialItem from "./SocialItem";

const Social = () => {
  return (
    <div className="ui five column stackable grid">
      <div className="row">
        <SocialItem
          text="LinkedIn"
          icon="linkedin big"
          url="https://linkedin.com/in/backpackerhh"
        />
        <SocialItem text="Twitter" icon="twitter big" url="https://twitter.com/backpackerhh" />
        <SocialItem text="GitHub" icon="github big" url="https://github.com/backpackerhh" />
        <SocialItem
          text="Stack Overflow"
          icon="stack overflow big"
          url="http://stackoverflow.com/users/1477964/backpackerhh"
        />
        <SocialItem
          text="Email"
          icon="mail outline big"
          url="mailto:backpackerhh@davidmontesdeoca.es"
        />
      </div>
    </div>
  );
};

export default Social;
