import React from "react";

import Avatar from "../Avatar/index";
import SocialLinks from "../SocialLinks/index";

const Info = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Avatar />
      <div>
        <h2>Hi, I'm (Vidhya) 👋</h2>
        <h3>Fullstack Java Developer 👨‍💻 and Research Engineer</h3>
        <SocialLinks />
      </div>
    </div>
  );
};

export default Info;
