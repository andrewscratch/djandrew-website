import { useState } from "react";
import styled, { keyframes } from "styled-components";
import heroImage from "../assets/images/hero_bg3.jpg";
import { Link } from "react-scroll";
const breakpoints = {
  mobile: "768px",
};

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  color: white;
  padding: 1rem;
  position: absolute;
  top: 10px;
  left: 30px;
  right: 10px;
  z-index: 10;
`;

const Nav = styled.nav`
  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 1rem;
  }
  li {
    margin: 0;
  }
  a {
    text-decoration: none;
    color: white;
    font-size: 1.5rem;
    transition: color 0.3s ease, transform 0.3s ease, text-shadow 0.3s ease;
    &:hover {
      color: #ff6347;
      text-decoration: underline;
      transform: scale(1.1);
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    }
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  @media (max-width: ${breakpoints.mobile}) {
    display: flex;
  }
  span {
    height: 2px;
    background: white;
    margin-bottom: 4px;
    width: 30px;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const MobileNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background-image: url(${heroImage});
  animation: ${fadeIn} 0.5s ease-in-out forwards;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
  &.open {
    transform: translateX(0);
  }
  ul {
    list-style: none;
    padding: 0;
  }
  a {
    color: white;
    padding: 10px;
    font-size: 2.5rem;
    transition: all 0.3s ease;
    &:hover {
      transform: scale(1.1);
      color: #ff6347;
    }
  }
`;

const CloseIcon = styled.svg`
  width: 30px;
  height: 30px;
  cursor: pointer;
  // Add more styling as needed
`;

const CloseButton = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  // Add or modify styles as needed
`;

const Header: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <HeaderContainer>
      <Hamburger onClick={toggleNav}>
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>
      <Nav>
        <ul>
          <li>
            <Link to="about" smooth={true} duration={700}>
              About
            </Link>
          </li>
          <li>
            <Link to="mixes" smooth={true} duration={800}>
              Mixes
            </Link>
          </li>
          <li>
            <Link to="video" smooth={true} duration={900}>
              Videos
            </Link>
          </li>
          <li>
            <Link to="photo" smooth={true} duration={1000}>
              Photos
            </Link>
          </li>
        </ul>
      </Nav>

      <MobileNav className={isNavOpen ? "open" : ""}>
        <CloseButton onClick={closeNav}>
          <CloseIcon viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="currentColor"
              d="M18.3,5.71L12,12l6.3,6.29-1.41,1.41L12,14.41,5.71,20.7,4.29,19.29,10.59,13,4.29,6.71,5.71,5.29,12,11.59l6.29-6.3Z"
            />
          </CloseIcon>
          <span></span>
          <span></span>
        </CloseButton>
        <ul>
          <li>
            <Link to="about" smooth={true} duration={500} onClick={closeNav}>
              About
            </Link>
          </li>
          <li>
            <Link to="mixes" smooth={true} duration={500} onClick={closeNav}>
              Mixes
            </Link>
          </li>
          <li>
            <Link to="video" smooth={true} duration={500} onClick={closeNav}>
              Videos
            </Link>
          </li>
          <li>
            <Link to="photo" smooth={true} duration={500} onClick={closeNav}>
              Photos
            </Link>
          </li>
        </ul>
      </MobileNav>
    </HeaderContainer>
  );
};

export default Header;
