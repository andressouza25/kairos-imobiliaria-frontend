import styled from "styled-components";
import { theme } from "../../styles/theme";

export const FeaturedContainer = styled.section`
  padding: 40px;
  text-align: center;
`;

export const PropertyList = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

export const ShowMoreButton = styled.button`
  margin-top: 20px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  color: ${theme.colors.text};
  background: ${theme.colors.primary};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: ${theme.colors.darkPrimary};
  }
`;
