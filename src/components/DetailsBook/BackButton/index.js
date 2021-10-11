import backIcon from "assets/backIcon.svg";
import { BackButtonStyled } from "./styles";

export default function BackButton({ onClick }) {
  return (
    <BackButtonStyled onClick={onClick}>
      <img src={backIcon} alt="" />
    </BackButtonStyled>
  );
}
