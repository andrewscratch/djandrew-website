import styled, { keyframes } from "styled-components";
import heroImage from "../assets/images/hero_bg.jpg";

const breakpoints = {
  tablet: "48rem",
  mobile: "30rem",
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
  padding: 0.625rem;
`;

const SubtitleWrapper = styled.div`
  flex: 1;
  text-align: right;
  padding: 0.625rem;
`;

const Subtitle = styled.h2`
  font-size: 1.1875rem;
  margin-right: 5rem;

  @media (max-width: ${breakpoints.tablet}) {
    margin-right: 1.25rem;
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
