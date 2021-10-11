import Section from "components/Section";
import ChapterIndicator from "./ChapterIndicator";
import bookCoverOriginals from "assets/bookCoverOriginals.png";
import ovalPattern from "assets/ovalPatternCurrently.png";
import {
  Title,
  ImageContainer,
  CoverImage,
  Author,
  Container,
  Content,
  PinkRectangle,
  TransparentCircle,
  BlueOutlinedCircle,
  BigOvalCircle,
} from "./styles";

export default function ReviewsOfTheDay() {
  return (
    <Section title="Currently Reading" linkText="All">
      <Container>
        <ImageContainer>
          <CoverImage
            src={bookCoverOriginals}
            alt="Book Cover Originals by Adam Grant"
          />
        </ImageContainer>
        <Content>
          <Title>Originals</Title>
          <Author>by Adam Grant</Author>
          <ChapterIndicator current="2" total="9" />
          <PinkRectangle />
          <TransparentCircle />
          <BlueOutlinedCircle />
          <BigOvalCircle src={ovalPattern} />
        </Content>
      </Container>
    </Section>
  );
}
