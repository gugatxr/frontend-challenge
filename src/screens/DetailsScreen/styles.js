import styled from "styled-components";

const MainContainer = styled.main`
  background-color: #fffcf9;
  min-height: 100%;
  overflow: hidden;
`;

const Title = styled.h1`
  color: 36383a;
  font-family: SFProDisplay;
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 4.188rem;
`;

const Subtitle = styled.span`
  font-weight: 300;
`;

const Author = styled.p`
  color: #ff6978;
  font-size: 1rem;
  font-family: SFProDisplay;
`;

const ContentWrapper = styled.div`
  padding-bottom: 7.5rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
`;

const Description = styled.p`
  color: rgba(49, 49, 49, 0.6);
  font-size: 0.875rem;
`;

export { MainContainer, Title, Subtitle, ContentWrapper, Author, Description };
