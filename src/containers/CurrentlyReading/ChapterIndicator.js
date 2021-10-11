import chapterIcon from "assets/chapterIcon.svg";
import { Container, CurrentChapter, Icon, Text } from "./ChapterIndicatorStyes";

export default function ChapterIndicator({ total, current }) {
  return (
    <Container>
      <Icon src={chapterIcon} alt="" />
      <Text>
        Chapter <CurrentChapter> {current} </CurrentChapter> From {total}
      </Text>
    </Container>
  );
}
