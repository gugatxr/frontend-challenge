import {
  WrapContainer,
  Container,
  ItemName,
  ItemContainer,
  Divider,
} from "./styles";

function DetailsBottomBar({ children }) {
  return (
    <WrapContainer>
      <Container>{children}</Container>
    </WrapContainer>
  );
}

function Item({ name, icon, ...props }) {
  return (
    <ItemContainer {...props}>
      <img src={icon} alt="" />
      <ItemName>{name}</ItemName>
    </ItemContainer>
  );
}

export { DetailsBottomBar as Container, Item, Divider };
