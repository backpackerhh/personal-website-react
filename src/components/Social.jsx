import React from "react";

import SocialItem from "./SocialItem";

const Social = () => {
  return (
    <>
      <div className="ui three column stackable grid">
        <div className="row">
          <SocialItem text="Blog" icon="pen square big" url="https://blog.davidmp.es" />
          <SocialItem text="LinkedIn" icon="linkedin big" url="https://linkedin.com/in/backpackerhh" />
          <SocialItem
            text="CV"
            icon="file outline big"
            url="https://www.getmanfred.com/en/applications/5fef1ff8-4a3e-41d5-8a7d-3a6da050e5f5"
          />
        </div>
        <div className="row">
          <SocialItem
            text="Stack Overflow"
            icon="stack overflow big"
            url="http://stackoverflow.com/users/1477964/backpackerhh"
          />
          <SocialItem text="GitHub" icon="github big" url="https://github.com/backpackerhh" />
          <SocialItem text="Email" icon="mail outline big" url="mailto:backpackerhh@davidmp.es" />
        </div>
      </div>
    </>
  );
};

export default Social;
