import styled, { keyframes } from "styled-components";
import { theme } from "./theme";

export const PageContainer = styled.div`
  padding: 0;
`;

export const Title = styled.h1`
  text-transform: uppercase;
`;

export const MainImage = styled.img`
  width: 100%;
  max-width: 100%;
  object-fit: cover;
  height: 460px;

  @media (max-width: 768px) {
    height: 240px;
  }
`;

export const ImageModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const slideIn = keyframes`
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const NavArrow = styled.button`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  font-size: 3rem;
  color: white;
  cursor: pointer;
  z-index: 1000;

  &:hover {
    color: #ccc;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const LeftArrow = styled(NavArrow)`
  left: 30px;
`;

export const RightArrow = styled(NavArrow)`
  right: 30px;
`;

export const ImageModalContent = styled.img<{ direction: "left" | "right" }>`
  max-width: 90%;
  max-height: 90%;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
  cursor: pointer;

  transition: transform 0.4s ease, opacity 0.4s ease;
  transform: translateX(
    ${(props) => (props.direction === "left" ? "-30px" : "30px")}
  );
  opacity: 0;
  animation: ${slideIn} 0.4s forwards;
`;

export const CloseButton = styled.button`
  position: fixed;
  top: 20px;
  right: 30px;
  background: transparent;
  border: none;
  font-size: 2rem;
  color: white;
  cursor: pointer;
  z-index: 1000;

  &:hover {
    color: #ccc;
  }
`;

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  height: 400px;
  overflow: hidden;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    height: 250px;
  }
`;

export const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;
`;

export const CarouselArrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%) translateY(2px);
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  border: none;
  font-size: 2rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
  }

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
    font-size: 1.6rem;
  }
`;

export const PrevArrow = styled(CarouselArrow)`
  left: 15px;
`;

export const NextArrow = styled(CarouselArrow)`
  right: 15px;
`;

export const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Thumb = styled.img`
  width: 100%;
  height: 80px;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
  padding: 5px 5px 0px 5px;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Detail = styled.p`
  font-size: 1rem;
  margin: 0.3rem 0;
`;

export const InfoGrid = styled.div`
  display: flex;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const MainImageContainer = styled.div`
  flex: 3;
`;

export const VerticalGallery = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const SideContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 0 10px 50px 10px;
`;
export const SideCard = styled.div`
  background-color: ${theme.colors.background};
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  max-width: 300px;
  width: 100%;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-self: flex-start;

  @media (max-width: 768px) {
    width: 100%;
    margin: 2rem 0 0 0;
  }
`;

export const SubTitle = styled.h4`
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 20px;
  color: ${theme.colors.darkGray};
  margin: 0;
  padding-bottom: 10px;
`;

export const SubTitleCard = styled.h4`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: ${theme.colors.darkGray};
  margin: 0;
  padding-bottom: 10px;
`;

export const BackButton = styled.button`
  position: absolute;
  top: 100px;
  left: 10px;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.text};
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  z-index: 1;
  border: none;

  &:hover {
    background-color: ${theme.colors.darkPrimary};
  }
`;

export const Price = styled.h2`
  color: ${theme.colors.secondary};
  margin: 1rem 0;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContactButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${theme.colors.primary};
  color: #fff;
  padding: 12px 10px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;
  transition: background 0.3s;
  &:hover {
    background-color: ${theme.colors.darkPrimary};
  }
`;

export const FeaturesRow = styled.div`
  display: flex;
  gap: 16px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  padding: 1rem 0;
  margin-top: -1rem;
  margin-left: 20px;
  flex-wrap: wrap;
`;

export const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1rem;
  color: #444;
  padding-right: 16px;
  padding-top: 12px;
  border-right: 1px solid #ddd;

  &:last-child {
    border-right: none;
  }

  svg {
    font-size: 1.1rem;
    color: ${theme.colors.darkGray};
  }
`;

export const ContentColumn = styled.div`
  flex: 1;
  max-width: 65%;
`;
