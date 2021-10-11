import styled from "styled-components";

const CoverImage = styled.img`
  border-radius: 5px;
  display: block;
  height: 230px;
  margin-right: auto;
  margin-left: auto;
  object-fit: cover;
  position: relative;
  width: 150px;
  z-index: 2;
`;

const CoverContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  position: relative;
  transform: translateY(57px);
  width: 150px;
`;

const CoverShadow = styled.div`
  background-color: #d8d8d8;
  border-radius: 146px;
  filter: blur(10.1828px);
  height: 17px;
  transform: translateY(-5px);
  width: 146px;
`;

const PinkCircle = styled.div`
  background: #ff6978;
  border-radius: 15px;
  height: 15px;
  left: -56px;
  position: absolute;
  top: 44px;
  width: 15px;
`;

const BlueCircle = styled.div`
  background: #00173d;
  border-radius: 63px;
  height: 63px;
  left: -31px;
  position: absolute;
  top: 38px;
  width: 63px;
`;

const BlueOutlinedCircle = styled.div`
  border-radius: 24px;
  border: 2px solid #4550a7;
  height: 24px;
  right: -8px;
  position: absolute;
  top: 2px;
  width: 24px;
`;

const OvalCover = styled.img`
  bottom: 70px;
  height: 48px;
  right: -21px;
  position: absolute;
  width: 48px;
`;

export {
  BlueCircle,
  PinkCircle,
  CoverImage,
  BlueOutlinedCircle,
  CoverShadow,
  OvalCover,
  CoverContainer,
};
