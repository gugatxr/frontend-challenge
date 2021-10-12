import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled(Link)`
  margin-bottom: 1.875rem;
  text-decoration: none;
  width: 30%;
`;

const Title = styled.p`
  color: rgba(49, 49, 49, 0.8);
  font-family: SFProDisplay;
  font-size: 0.75rem;
  font-weight: bold;
  margin: 0;
  margin-bottom: 0.313rem;
`;

const Author = styled.p`
  color: rgba(49, 49, 49, 0.8);
  font-family: SFProDisplay;
  font-size: 0.625rem;
  font-weight: bold;
  margin: 0;
`;

const CoverContainer = styled.div`
  height: 9.375rem;
  margin-bottom: 0.625rem;
  width: 100%;
`;

const CoverImg = styled.img`
  border-radius: 5px;
  height: 100%;
  object-fit: cover;
  width: 100%;
  filter: drop-shadow(0px 2px 4px rgba(229, 229, 229, 0.5));
`;

export { Container, Title, Author, CoverContainer, CoverImg };
