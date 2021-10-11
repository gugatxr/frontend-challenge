import { ItemContainer, ItemText } from "./styles";

export default function TabBarItem({ title, icon, link, active, onClick }) {
  const onClickLocal =
    onClick ??
    (() => {
      console.log("click");
    });
  return (
    <ItemContainer active={active} href={link} onClick={onClickLocal}>
      {icon}
      <ItemText active={active}>{title}</ItemText>
    </ItemContainer>
  );
}
