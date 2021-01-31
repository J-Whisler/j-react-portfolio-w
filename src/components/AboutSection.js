import React from "react";

const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>
              Hello, My name is <span>Jacob Whisler</span>
            </h2>
          </div>
          <div className="hide">
            <h2>I am a front-end web developer</h2>
          </div>
        </div>
        <p>
          Click one of the links above to learn more about me, my work, or to
          find out how to get in contact with me!
        </p>
      </div>
      {/* <div className="image">
          <img src="" alt=""/>
      </div>  */}
    </div>
  );
};

export default AboutSection;
