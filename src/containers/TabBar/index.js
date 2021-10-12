import { ReactComponent as HomeIcon } from "assets/homeIcon.svg";
import { ReactComponent as UserIcon } from "assets/userIcon.svg";
import { ReactComponent as BookIcon } from "assets/bookIcon.svg";
import TabBarItem from "components/TabBarItem";
import { WrapContainer, Container } from "./styles";

export default function TabBar({ onHomeClick }) {
  return (
    <WrapContainer>
      <Container>
        <TabBarItem
          title="Home"
          onClick={onHomeClick}
          icon={<HomeIcon />}
          link="#"
          active={true}
        />
        <TabBarItem
          title="Libraries"
          icon={<BookIcon />}
          link="#"
          active={false}
        />
        <TabBarItem
          title="Profile"
          icon={<UserIcon />}
          link="#"
          active={false}
        />
      </Container>
    </WrapContainer>
  );
}
