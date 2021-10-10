import styled from "styled-components";
import SearchInput from "components/form/SearchInput";
import WelcomeMessage from "components/WelcomeMessage";

const Container = styled.div`
  background-color: rgb(255, 251, 248);
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;
  padding-top: 50px;
`;

export default function HomeScreen() {
  return (
    <Container>
      <SearchInput placeholder="Search book" />

      <WelcomeMessage name="Mehmed Al Fatih" />
    </Container>
  );
}
