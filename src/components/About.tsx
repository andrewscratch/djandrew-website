import { useState, useEffect } from "react";
import styled from "styled-components";
import aboutImage from "../assets/images/about.jpeg";
import aboutImage1 from "../assets/images/about1.jpg";
import aboutImage2 from "../assets/images/about2.jpg";
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaTelegram } from "@react-icons/all-files/fa/FaTelegram";

const breakpoints = {
  tablet: "48rem",
  mobile: "30rem",
};

const AboutSectionContainer = styled.section`
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;

  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    padding: 5rem;
    justify-content: space-between;
  }
`;

const AboutImage = styled.img`
  max-width: 100%;
  margin-bottom: 1.25rem;

  @media (min-width: ${breakpoints.tablet}) {
    max-width: 45%;
  }
`;
const AboutTitle = styled.p`
  font-size: 2.5rem;
`;
const AboutContent = styled.div`
  width: 100%;

  @media (min-width: ${breakpoints.tablet}) {
    width: 50%;
  }
`;

const SocialLinks = styled.div`
  margin-bottom: 1.25rem;
  a {
    color: white;
    margin-right: 0.625rem;
    text-decoration: none;
    &:hover {
      color: #ff6347;
      transform: scale(1.1);
      text-shadow: 0.125rem 0.125rem 0.25rem rgba(0, 0, 0, 0.2);
    }
  }
`;

const AboutText = styled.p`
  line-height: 1.6;
  text-align: justify;
`;

export const AboutSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [aboutImage, aboutImage1, aboutImage2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (currentIndex) => (currentIndex + 1) % images.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AboutSectionContainer id="about">
      <AboutImage src={images[currentImageIndex]} alt="About" />
      <AboutContent>
        <SocialLinks>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF style={{ fontSize: "1.5rem" }} />
          </a>
          <a
            href="https://www.youtube.com/channel/UC3egG_47IjJiyqgWPcKDMxw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube style={{ fontSize: "1.5rem" }} />
          </a>
          <a
            href="https://instagram.com/andrewscratch"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram style={{ fontSize: "1.5rem" }} />
          </a>
          <a
            href="https://t.me/andrewscratch"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegram style={{ fontSize: "1.5rem" }} />
          </a>
        </SocialLinks>
        <AboutTitle>DJ ANDREW</AboutTitle>
        <AboutText>
          <p className="paragraph">
            Dj Andrew is a seasoned Hip-Hop/R'n'B DJ, though his sets often
            showcase a diverse range of musical styles. With over two decades of
            experience in the industry, he is celebrated for his unique style,
            exceptional scratch skills, and an innate ability to connect with
            his audience through his music. Andrew embarked on his musical
            journey in 2001, quickly rising to prominence as one of Ukraine's
            premier Hip-Hop/R'n'B DJs.
          </p>
          His talent and dedication earned him recognition in various
          championships, where he secured victory in several competitions.
          Notably, Andrew took the initiative to organize the Ukrainian Scratch
          Championship, garnering support from renowned DJs such as dj Rafik and
          Q-bert, among others. This event showcased his commitment to advancing
          the art of DJing in Ukraine.
          <p className="paragraph">
            A significant chapter in Andrew's career includes his role as a DJ
            in music bands like VovaZiLvova, D'lemma, and the well-known
            Ukrainian band TNMK, where he contributed his skills for over eight
            years. In addition to his DJing endeavors, Andrew has established
            his own Dj Academy, which operates in Kyiv, Limassol, and online,
            reaching students worldwide. This academy serves as a hub for highly
            qualified DJs and producers to share their knowledge and expertise
            with aspiring talents, fostering growth and innovation in the music
            industry.
          </p>
        </AboutText>
      </AboutContent>
    </AboutSectionContainer>
  );
};

export default AboutSection;
