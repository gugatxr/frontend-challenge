import Section from "components/Section";
import dontMakeThinkVideo from "assets/dontMakeThinkVideo.png";
import {
  Card,
  Title,
  Description,
  ContentContainer,
  StatsText,
  StatsDivider,
  StatsContainer,
  Image,
} from "./styles";

export default function ReviewsOfTheDay() {
  return (
    <Section title="Reviews of The Days" linkText="All Video">
      <Card>
        <Image
          src={dontMakeThinkVideo}
          alt="Video cover about Dont make me think book"
        />
        <ContentContainer>
          <Title>Don’t Make Me Think - Steve Krug</Title>

          <StatsContainer>
            <StatsText>Jesse Showalter </StatsText>
            <StatsDivider />
            <StatsText>5.2K Views</StatsText>
            <StatsDivider />
            <StatsText>1 Week ago</StatsText>
          </StatsContainer>
          <Description>
            &quot;Don&apos;t Make Me Think&quot; by Steve Krug is one of the
            first books I read when I was getting into digital design. It helped
            me move from designing things that just &quot;look nice&quot; to
            designing things that are usable, useful, memorable and simple to
            learn and use.
          </Description>
        </ContentContainer>
      </Card>
    </Section>
  );
}
