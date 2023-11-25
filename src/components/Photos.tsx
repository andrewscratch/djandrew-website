import { useState } from "react";

import { useEffect } from "react";

import { ImageList, ImageListItem } from "@mui/material";

import styled from "styled-components";

import first from "../assets/images/first.jpg";

import second from "../assets/images/second.jpg";

import third from "../assets/images/third.jpg";

import fourth from "../assets/images/fourth.jpg";

import fifth from "../assets/images/fifth.jpg";

import sixth from "../assets/images/six.jpg";

import seven from "../assets/images/seven.jpg";

import eight from "../assets/images/eight.jpg";

import nine from "../assets/images/nine.jpg";

const breakpoints = {
  tablet: "768px",

  mobile: "480px",
};

const StyledContainer = styled.div`
  background-color: #f0f0f0;

  padding: 30px;
`;

const Title = styled.h2`
  color: #000000;

  font-family: "DM Sans", sans-serif;

  font-size: 40px;

  text-align: center;

  margin: 20px 0;
`;

const StyledImageList = styled(ImageList)`
  width: 100%;

  height: auto;

  margin: 0 auto;

  max-width: 1200px;

  overflow: hidden;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr); /* 2 columns for tablets */
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: repeat(1, 1fr); /* 1 column for mobiles */
  }
`;

const StyledImageListItem = styled(ImageListItem)`
  border-radius: 8px;

  overflow: hidden;

  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);

    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  }
`;

const ModalOverlay = styled.div`
  position: fixed;

  top: 0;

  left: 0;

  right: 0;

  bottom: 0;

  background-color: rgba(0, 0, 0, 0.7);

  display: flex;

  align-items: center;

  justify-content: center;

  z-index: 1000;
`;

const ModalImage = styled.img`
  max-width: 80%;

  max-height: 80%;
`;

const Photos: React.FC = () => {
  const [modalImage, setModalImage] = useState<string>("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const images = [
    first,
    second,
    third,
    fourth,
    fifth,
    sixth,
    seven,
    eight,
    nine,
  ];

  const openModal = (img: string) => {
    setModalImage(img);

    setIsModalOpen(true);

    document.body.style.overflow = "hidden";
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);

    document.body.style.overflow = "visible";
  };

  return (
    <StyledContainer id="photo">
      <Title>Gallery</Title>

      <StyledImageList cols={3} gap={8}>
        {images.map((img, index) => (
          <StyledImageListItem key={index} onClick={() => openModal(img)}>
            <img
              src={img}
              alt={`Gallery item ${index}`}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </StyledImageListItem>
        ))}
      </StyledImageList>

      {isModalOpen && (
        <ModalOverlay onClick={closeModal}>
          <ModalImage src={modalImage} alt="Modal view" />
        </ModalOverlay>
      )}
    </StyledContainer>
  );
};

export default Photos;
