import { useState, useEffect } from "react";
import styled from "styled-components";
import aboutImage from "../assets/images/about.jpeg";
import aboutImage1 from "../assets/images/about1.jpg";
import aboutImage2 from "../assets/images/about2.jpg";
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube";
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaTelegram } from "@react-icons/all-files/fa/FaTelegram";

// Media query breakpoints
const breakpoints = {
  tablet: "768px",
  mobile: "480px",
};

const AboutSectionContainer = styled.section`
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column; /* Changed to column for mobile-first approach */
  padding: 20px; /* Reduced padding for smaller screens */
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;

  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row; /* Row layout for tablet and above */
    padding: 50px; /* Increased padding for larger screens */
    justify-content: space-between;
  }
`;

const AboutImage = styled.img`
  max-width: 100%; /* Increased max-width for smaller screens */
  margin-bottom: 20px; /* Added margin for spacing */

  @media (min-width: ${breakpoints.tablet}) {
    max-width: 30%;
    margin-bottom: 0;
  }
`;

const AboutContent = styled.div`
  width: 100%; /* Full width for smaller screens */

  @media (min-width: ${breakpoints.tablet}) {
    width: 50%; /* Reduced width for larger screens */
  }
`;

const SocialLinks = styled.div`
  margin-bottom: 20px;
  a {
    color: white;
    margin-right: 10px;
    text-decoration: none;
    &:hover {
      color: #ff6347;
      transform: scale(1.1);
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    }
  }
`;

const AboutText = styled.p`
  line-height: 1.6;
  text-align: justify;
`;

export const AboutSection = () => {
  // Стан для відслідковування поточного зображення та індексу
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [aboutImage, aboutImage1, aboutImage2];

  useEffect(() => {
    // Запускаємо інтервал для зміни зображення кожні 5 секунд
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (currentIndex) => (currentIndex + 1) % images.length
      );
    }, 5000); // 5000 мілісекунд (5 секунд)

    // Очищаємо інтервал при розмонтовуванні компонента
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
            <FaFacebookF style={{ fontSize: "24px" }} />
          </a>
          <a
            href="https://www.youtube.com/channel/UC3egG_47IjJiyqgWPcKDMxw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube style={{ fontSize: "24px" }} />
          </a>
          <a
            href="https://instagram.com/andrewscratch"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram style={{ fontSize: "24px" }} />
          </a>
          <a
            href="https://t.me/andrewscratch"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegram style={{ fontSize: "24px" }} />
          </a>
        </SocialLinks>
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
