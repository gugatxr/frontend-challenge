import ovalPattern from "assets/ovalPattern.png";
import { HeaderContainer, BigOvalCover } from "./styles";

export default function Header({ children }) {
  return (
    <HeaderContainer>
      <BigOvalCover src={ovalPattern} alt="" />
      {children}
    </HeaderContainer>
  );
}
