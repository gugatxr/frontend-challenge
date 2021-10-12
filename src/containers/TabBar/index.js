import styled from "styled-components";
import { ReactComponent as HomeIcon } from "assets/homeIcon.svg";
import { ReactComponent as UserIcon } from "assets/userIcon.svg";
import { ReactComponent as BookIcon } from "assets/bookIcon.svg";
import TabBarItem from "components/TabBarItem";

const WrapContainer = styled.nav`
  background-color: #fff;
  bottom: 0;
  left: 0;
  margin: auto;
  max-width: 23.438rem;
  right: 0;
  position: fixed;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 55px;
`;

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
