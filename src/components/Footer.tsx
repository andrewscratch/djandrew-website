import styled from "styled-components";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTelegram,
} from "react-icons/fa";
import { Link } from "react-scroll";

const breakpoints = {
  mobile: "768px",
};

const FooterContainer = styled.footer`
  background-color: #000; // Black color
  color: #fff;
  padding: 20px 0; // Reduced padding for smaller screens
  display: flex;
  flex-direction: column; // Stack elements vertically on mobile
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  @media (min-width: ${breakpoints.mobile}) {
    flex-direction: row; // Original row layout for larger screens
    justify-content: space-around;
    padding: 60px 0;
  }
`;

const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  margin-bottom: 30px; // Reduced margin for smaller screens
  & > * {
    margin-right: 15px;
    font-size: 24px;
    color: #fff;
    &:hover {
      color: #ff6347;
      transform: scale(1.1);
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    }
  }
  @media (min-width: ${breakpoints.mobile}) {
    margin-bottom: 40px; // Original margin for larger screens
  }
`;

const NavLinks = styled.nav`
  display: flex;
  flex-direction: column; // Stack links vertically on mobile
  align-items: center;
  flex: 1;
  margin-bottom: 30px; // Reduced margin for smaller screens
  a {
    color: #fff;
    text-decoration: none;
    padding: 8px;
    &:hover {
      color: #ff6347;
      text-decoration: underline;
      transform: scale(1.1);
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    }
  }
  @media (min-width: ${breakpoints.mobile}) {
    flex-direction: row; // Original horizontal layout for larger screens
    margin-bottom: 40px; // Original margin for larger screens
  }
`;

const BottomInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 30px; // Reduced margin for smaller screens
  @media (min-width: ${breakpoints.mobile}) {
    margin-bottom: 40px; // Original margin for larger screens
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <SocialMedia>
        <a
          href="https://facebook.com/andrewscratch"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://instagram.com/andrewscratch"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.youtube.com/channel/UC3egG_47IjJiyqgWPcKDMxw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube />
        </a>
        <a
          href="https://t.me/andrewscratch"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegram />
        </a>
      </SocialMedia>
      <NavLinks>
        <Link to="about" smooth={true} duration={900}>
          About
        </Link>
        <Link to="mixes" smooth={true} duration={800}>
          Mixes
        </Link>
        <Link to="photo" smooth={true} duration={700}>
          Photos
        </Link>
        <Link to="video" smooth={true} duration={700}>
          Video
        </Link>
      </NavLinks>
      <BottomInfo>
        <div>Design by: Denys Puccini</div>
        <div>© Copyright 2023</div>
      </BottomInfo>
    </FooterContainer>
  );
};

export default Footer;
