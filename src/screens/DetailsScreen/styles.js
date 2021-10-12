import styled from "styled-components";

const MainContainer = styled.main`
  background-color: #fffcf9;
  min-height: 100%;
  overflow: hidden;
`;

const Title = styled.h1`
  color: 36383a;
  font-family: SFProDisplay;
  font-size: 24px;
  font-weight: bold;
  margin-top: 67px;
`;

const Subtitle = styled.span`
  font-weight: 300;
`;

const Author = styled.p`
  color: #ff6978;
  font-size: 16px;
  font-family: SFProDisplay;
`;

const ContentWrapper = styled.div`
  padding-bottom: 120px;
  padding-left: 20px;
  padding-right: 20px;
`;

const Description = styled.p`
  color: rgba(49, 49, 49, 0.6);
  font-size: 0.875rem;
`;

export { MainContainer, Title, Subtitle, ContentWrapper, Author, Description };
