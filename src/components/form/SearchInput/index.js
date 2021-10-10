import TextInput from "../TextInput";
import SearchIcon from "assets/searchIcon.svg";
import { Container, IconImg } from "./styles";

export default function SearchInput(props) {
  return (
    <Container>
      <IconImg src={SearchIcon} />
      <TextInput {...props} />
    </Container>
  );
}
