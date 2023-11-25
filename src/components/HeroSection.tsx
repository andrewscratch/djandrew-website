import styled, { keyframes } from "styled-components";

import heroVideo from "../assets/ videos/hero_bg.mp4";

const breakpoints = {
  tablet: "48rem",
  mobile: "30rem",
};

const HeroContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: white;
`;

const VideoBackground = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const pulse = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
  100% {
    opacity: 1;
  }
`;

const DJText = styled.div`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 7.25rem;
  transition: color 0.3s ease;

  &:hover {
    color: #ff6347;
    animation: ${pulse} 1s infinite;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 3.75rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    top: 60%;
    font-size: 3.75rem;
  }
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <VideoBackground autoPlay muted>
        <source src={heroVideo} type="video/mp4" />
      </VideoBackground>
      <DJText>DJ ANDREW</DJText>
    </HeroContainer>
  );
};

export default HeroSection;
