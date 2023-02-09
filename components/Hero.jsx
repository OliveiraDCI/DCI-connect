import React from "react";
import Image from "next/image";
import team from "../public/team.gif";

const Hero = () => (
  <div className="hero text-center d-flex" data-testid="hero">
    <div className="hero-text-container">
      <h1 className="hero-title" data-testid="hero-title">
        WELCOME TO DCI CONNECT
      </h1>
      <p className="hero-para mx-0 my-3" data-testid="hero-lead">
        Our platform is all about bringing current DCI students and alumni together for some seriously awesome
        mentorship opportunities.
      </p>
    </div>
    <div className="team-image mt-2">
      <Image src={team} alt="team" />
    </div>
  </div>
);
export default Hero;
