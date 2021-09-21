import React from "react";
import styled from "styled-components";

//import image
import home1 from "../img/home1.png";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide className="hide">
            <h2>We work to make</h2>
          </Hide>
          <Hide className="hide">
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide className="hide">
            <h2>true</h2>
          </Hide>
        </div>
        <p>
          Contact us for any photography and videography ideas that you have.we
          have professionals with amazing skills.
        </p>
        <button>Contact Us</button>
      </Description>
      <Image className="image">
        <img src={home1} alt="camera" />
      </Image>
    </About>
  );
};

const About = styled.div`
  display: flex;
  padding: 5rem 10rem;
  min-height: 90vh;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default AboutSection;
