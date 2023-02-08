import React from 'react';
import Image from "next/image";
import team from "../public/team.gif";

const Hero = () => (
  <div className="hero mt-5 text-center d-flex" data-testid="hero">
    <div className="hero-text-container">
      <h1 className="hero-title" data-testid="hero-title">
        WELCOME TO
      </h1>
      <h1 className="hero-title mb-5" data-testid="hero-title">
        DCI CONNECT
      </h1>
      <p className="lead" data-testid="hero-lead">
        Our platform is all about bringing current DCI students and alumni together for some seriously awesome
        mentorship opportunities.
      </p>
    </div>
    <div className="team-image">
      <Image src={team} alt="team" />
    </div>
  </div>
);

export default Hero;
