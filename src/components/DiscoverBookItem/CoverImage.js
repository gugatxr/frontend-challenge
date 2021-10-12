import triangle from "assets/triangle.svg";
import {
  Cover,
  Container,
  PinkRectangle,
  BlueOutlinedCircle,
  Triangle,
} from "./CoverImageStyles";

export default function CoverImage({ coverImage, alt }) {
  return (
    <Container>
      <BlueOutlinedCircle />
      <PinkRectangle />
      <Triangle src={triangle} />
      <Cover src={coverImage} alt={alt} />
    </Container>
  );
}
