import styled from "styled-components";

export const Container = styled.div`
  background-color: #eef5db;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  display: flex;
  margin-left: -1.25rem;
  margin-bottom: 2.813rem;
  margin-top: 1.875rem;
  position: relative;
  width: 100%;
`;

export const Title = styled.h1`
  color: #2a2b26;
  font-family: "Playfair Display", serif;
  font-size: 1.25rem;
  line-height: 1.688rem;
  letter-spacing: 0.125rem;
  margin-top: 0.625rem;
  margin-bottom: 0.313rem;
`;

export const ImageContainer = styled.div`
  left: 1.25rem;
  position: absolute;
  top: -0.938rem;
`;

export const CoverImage = styled.img`
  border-radius: 1px;
  box-shadow: 0.313rem 7px 32px 0px #8caa3a31;
  height: 8.5rem;
  width: 5.688rem;
`;

export const Author = styled.div`
  color: #74776d;
  font-family: "Roboto", sans-serif;
  font-size: 0.625rem;
  line-height: 0.733rem;
`;

export const Content = styled.div`
  flex-grow: 1;
  margin-left: 8.125rem;
  overflow: hidden;
  position: relative;
`;

export const PinkRectangle = styled.div`
  background: #ff6978;
  height: 0.25rem;
  right: -1.425rem;
  position: absolute;
  top: 70%;
  width: 2.875rem;
  transform: rotate(14deg);
`;

export const TransparentCircle = styled.div`
  background: #d6d1b1;
  border-radius: 7.25rem;
  height: 7.25rem;
  right: -1.75rem;
  position: absolute;
  opacity: 0.09;
  top: 30%;
  width: 7.25rem;
`;

export const BlueOutlinedCircle = styled.div`
  border-radius: 1.125rem;
  border: 0.125rem solid #4550a7;
  height: 1.125rem;
  right: 38%;
  position: absolute;
  top: -0.375rem;
  width: 1.125rem;
`;

export const BigOvalCircle = styled.img`
  top: -1.188rem;
  height: 4.313rem;
  right: -2.063rem;
  position: absolute;
  width: 4.313rem;
`;
