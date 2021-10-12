import styled from "styled-components";

export const Cover = styled.img`
  border-radius: 5px;
  height: 6.875rem;
  object-fit: cover;
  width: 4.563rem;
`;

export const Container = styled.div`
  position: relative;
  margin-left: 3rem;
`;

export const PinkRectangle = styled.div`
  background: #ff6978;
  height: 0.25rem;
  left: -45%;
  position: absolute;
  top: 75%;
  width: 2.875rem;
  transform: rotate(14deg);
`;

export const BlueOutlinedCircle = styled.div`
  border-radius: 1.125rem;
  border: 0.13rem solid #4550a7;
  height: 1.125rem;
  left: -40%;
  position: absolute;
  top: 0;
  width: 1.125rem;
`;

export const Triangle = styled.img`
  height: 1.764rem;
  left: -10%;
  position: absolute;
  top: -10%;
  width: 2.054rem;
`;
