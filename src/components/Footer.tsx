import styled from "styled-components";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTelegram,
} from "react-icons/fa";
import { Link } from "react-scroll";

const breakpoints = {
  mobile: "48rem", // Встановлюємо ширину в rem
};

const FooterContainer = styled.footer`
  background-color: #000; // Black color
  color: #fff;
  padding: 1.25rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  @media (min-width: ${breakpoints.mobile}) {
    flex-direction: row;
    justify-content: space-around;
    padding: 3.75rem 0;
  }
`;

const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  margin-bottom: 1.875rem;
  & > * {
    margin-right: 0.9375rem;
    font-size: 1.5rem;
    color: #fff;
    &:hover {
      color: #ff6347;
      transform: scale(1.1);
      text-shadow: 0.125rem 0.125rem 0.25rem rgba(0, 0, 0, 0.2);
    }
  }
  @media (min-width: ${breakpoints.mobile}) {
    margin-bottom: 2.5rem;
  }
`;

const NavLinks = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  margin-bottom: 1.875rem;
  a {
    color: #fff;
    text-decoration: none;
    padding: 0.46875rem;
    &:hover {
      color: #ff6347;
      text-decoration: underline;
      transform: scale(1.1);
      text-shadow: 0.125rem 0.125rem 0.25rem rgba(0, 0, 0, 0.2);
    }
  }
  @media (min-width: ${breakpoints.mobile}) {
    flex-direction: row;
    margin-bottom: 2.5rem;
  }
`;

const BottomInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 1.875rem;
  @media (min-width: ${breakpoints.mobile}) {
    margin-bottom: 2.5rem;
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
