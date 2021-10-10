import { ItemContainer, ItemText } from "./styles";

export default function TabBarItem({ title, icon, link, active }) {
  return (
    <ItemContainer active={active} href={link}>
      {icon}
      <ItemText active={active}>{title}</ItemText>
    </ItemContainer>
  );
}
