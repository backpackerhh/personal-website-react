import React from "react";

function Loader() {
  return (
    <div className="ui segment">
      <div className="ui active inverted dimmer">
        <div className="ui small centered loader"></div>
      </div>
    </div>
  );
}

export default Loader;
