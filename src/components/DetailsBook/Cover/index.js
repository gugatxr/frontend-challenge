import {
  BlueCircle,
  PinkCircle,
  CoverImage,
  BlueOutlinedCircle,
  CoverShadow,
  OvalCover,
  CoverContainer,
} from "./styles";
import ovalSmall from "assets/ovalSmall.png";

export default function Cover({ src }) {
  return (
    <CoverContainer>
      <BlueCircle />
      <PinkCircle />
      <CoverImage src={src} />
      <BlueOutlinedCircle />
      <CoverShadow />
      <OvalCover src={ovalSmall} />
    </CoverContainer>
  );
}
