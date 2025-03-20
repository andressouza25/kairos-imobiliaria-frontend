import styled from "styled-components";
import { theme } from "./theme";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  flex-wrap: wrap;
`;

export const TextSection = styled.div`
  flex: 1;
  max-width: 600px;

  h1 {
    font-size: 2rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 15px;
  }
`;

export const ImageSection = styled.div`
  flex: 1;
  max-width: 300px;

  img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }
`;

export const InstagramButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.text};
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  padding: 12px 20px;
  border-radius: 5px;
  margin: 30px auto;
  width: fit-content;
  transition: background 0.3s ease-in-out;

  &:hover {
    color: ${theme.colors.darkGray}; /* Cor mais escura ao passar o mouse */
  }

  svg {
    font-size: 1.5rem;
  }
`;
