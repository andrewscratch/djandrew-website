import styled, { keyframes } from "styled-components";
import heroImage from "../assets/images/hero_bg.jpg";

const breakpoints = {
  tablet: "768px",
  mobile: "480px",
};

const HeroContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${heroImage});

  background-position: center;
  background-size: cover;

  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  color: white;
`;

const TitleWrapper = styled.div`
  flex: 1;
  text-align: left;
  padding: 10px; /* Added padding for smaller screens */
`;

const SubtitleWrapper = styled.div`
  flex: 1;
  text-align: right;
  padding: 10px; /* Added padding for smaller screens */
`;

const Subtitle = styled.h2`
  font-size: 19px;
  margin-right: 80px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-right: 20px; /* Reduced margin for tablet and smaller screens */
  }
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
  font-size: 116px;
  transition: color 0.3s ease;

  &:hover {
    color: #ff6347;
    animation: ${pulse} 1s infinite;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 60px; /* Reduced font size for tablet and smaller screens */
  }

  @media (max-width: ${breakpoints.mobile}) {
    top: 60%;
    font-size: 60px; /* Further reduced font size for mobile screens */
  }
`;

export const HeroSection: React.FC = () => {
  return (
    <HeroContainer>
      <TitleWrapper></TitleWrapper>
      <SubtitleWrapper>
        <Subtitle></Subtitle>
      </SubtitleWrapper>

      <DJText>DJ ANDREW</DJText>
    </HeroContainer>
  );
};

export default HeroSection;
