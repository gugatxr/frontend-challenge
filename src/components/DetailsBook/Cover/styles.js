import styled from "styled-components";

const CoverImage = styled.img`
  border-radius: 5px;
  display: block;
  height: 14.375rem;
  margin-right: auto;
  margin-left: auto;
  object-fit: cover;
  position: relative;
  width: 9.375rem;
  z-index: 2;
`;

const CoverContainer = styled.div`
  margin-right: auto;
  margin-left: auto;
  position: relative;
  transform: translateY(3.563rem);
  width: 9.375rem;
`;

const CoverShadow = styled.div`
  background-color: #d8d8d8;
  border-radius: 9.125rem;
  filter: blur(10.1828px);
  height: 1.063rem;
  transform: translateY(-0.313rem);
  width: 9.125rem;
`;

const PinkCircle = styled.div`
  background: #ff6978;
  border-radius: 1.125rem;
  height: 1.125rem;
  left: -3.5rem;
  position: absolute;
  top: 2.75rem;
  width: 1.125rem;
`;

const BlueCircle = styled.div`
  background: #00173d;
  border-radius: 3.938rem;
  height: 3.938rem;
  left: -1.938rem;
  position: absolute;
  top: 2.375rem;
  width: 3.938rem;
`;

const BlueOutlinedCircle = styled.div`
  border-radius: 1.5rem;
  border: 0.125rem solid #4550a7;
  height: 1.5rem;
  right: -0.5rem;
  position: absolute;
  top: 0.125rem;
  width: 1.5rem;
`;

const OvalCover = styled.img`
  bottom: 4.375rem;
  height: 3rem;
  right: -1.313rem;
  position: absolute;
  width: 3rem;
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
