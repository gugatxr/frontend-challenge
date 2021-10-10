import styled from "styled-components";

const Container = styled.a`
  margin-bottom: 30px;
  width: 30%;
`;

const Title = styled.p`
  color: rgba(49, 49, 49, 0.8);
  font-family: SFProDisplay;
  font-size: 12px;
  font-weight: bold;
  margin: 0;
  margin-bottom: 5px;
`;

const Author = styled.p`
  color: rgba(49, 49, 49, 0.8);
  font-family: SFProDisplay;
  font-size: 10px;
  font-weight: bold;
  margin: 0;
`;

const CoverContainer = styled.div`
  height: 150px;
  margin-bottom: 10px;
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
