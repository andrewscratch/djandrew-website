import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import ReactPlayer from "react-player";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";
import AnimatedText from "react-animated-text-content";

import backgroundImg from "../../assets/images/backdrop.jpg"; // Import your background image here

const breakpoints = {
  tablet: "48rem",
  mobile: "30rem",
};

const StyledContainer = styled.div`
  // background-image: url(${backgroundImg});
  background-color: #000;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 1.25rem;

  @media (min-width: ${breakpoints.tablet}) {
    padding: 5rem;
  }
`;

const StyledVideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (min-width: ${breakpoints.tablet}) {
    margin-left: 15%;
    height: 18rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin-left: 15%;
    height: 15rem;
    width: 35rem;
  }

  @media (orientation: landscape) {
    margin-left: 15%;
    padding-bottom: 2rem;
    height: 20rem;
    width: 100%;
  }

  @media (min-width: 64rem) {
    height: 42rem;
  }
`;

const Title = styled.h2`
  font-family: DM Sans;
  font-size: 2.5rem;
  color: #fff;
  text-align: center;
  margin-bottom: 1.25rem;
  @media (min-width: ${breakpoints.tablet}) {
    font-size: 2.5rem;
  }
`;

const Videos = () => {
  const videoIds = [
    "FpSIHQUIQ-w",
    "te0YruVRJIo",
    "vJ2JD1nvlss",
    "iY12xWWKbHE",
    // ... add other video IDs here
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (_: number, next: number) => setCurrentVideoIndex(next),
  };

  return (
    <StyledContainer id="video">
      <Title>
        <AnimatedText
          type="words"
          animation={{
            x: "200px",
            y: "-20px",
            scale: 1.1,
            ease: "ease-in-out",
          }}
          animationType="float"
          interval={0.06}
          duration={0.8}
          tag="p"
          className="animated-paragraph"
          includeWhiteSpaces
          threshold={0.1}
          rootMargin="20%"
        >
          Videos
        </AnimatedText>
      </Title>
      <Slider {...settings}>
        {videoIds.map((id, index) => (
          <StyledVideoContainer key={id}>
            {index === currentVideoIndex && (
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                width="70%"
                height="80%"
                controls
              />
            )}
          </StyledVideoContainer>
        ))}
      </Slider>
    </StyledContainer>
  );
};

export default Videos;
