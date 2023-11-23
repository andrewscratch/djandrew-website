import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import ReactPlayer from "react-player";

import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

// Media query breakpoints
const breakpoints = {
  tablet: "768px",
  mobile: "480px",
};

const StyledContainer = styled.div`
  background-color: #000;
  padding: 20px; // Reduced padding for smaller screens
  @media (min-width: ${breakpoints.tablet}) {
    padding: 80px; // Original padding for larger screens
  }
  // @media (min-width: ${breakpoints.mobile}) {
  //   margin: 30px;
  // }
`;

const StyledVideoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto; // Adjusted height for responsiveness
  @media (min-width: ${breakpoints.tablet}) {
    margin-left: 15%; // Original margin for larger screens
    height: 320px; // Original fixed height for larger screens
  }
  @media (max-width: ${breakpoints.mobile}) {
    margin-left: 15%;
    height: 210px;
    width: 350px;
  }
`;

const Title = styled.h2`
  font-family: DM Sans;
  font-size: 24px; // Reduced font size for smaller screens
  color: #fff;
  text-align: center;
  margin-bottom: 20px;
  @media (min-width: ${breakpoints.tablet}) {
    font-size: 40px; // Original font size for larger screens
  }
`;
const Videos = () => {
  const videoIds = [
    "FpSIHQUIQ-w",
    "te0YruVRJIo",
    "vJ2JD1nvlss",
    "iY12xWWKbHE",
    // ... other video IDs
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
    beforeChange: (_: any, next: number) => {
      setCurrentVideoIndex(next);
    },
  };

  return (
    <StyledContainer id="video">
      <Title>Videos</Title>
      <Slider {...settings}>
        {videoIds.map((id, index) => (
          <StyledVideoContainer key={id}>
            {index === currentVideoIndex && (
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${id}`}
                width="70%" // Зменшуємо ширину відео на 80%
                height="80%" // Зменшуємо висоту відео на 60%
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
