import styled from "styled-components";

export const Container = styled.div`
  background-color: #eef5db;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  display: flex;
  margin-left: -20px;
  margin-bottom: 45px;
  margin-top: 30px;
  position: relative;
  width: 100%;
`;

export const Title = styled.h1`
  color: #2a2b26;
  font-family: "Playfair Display", serif;
  font-size: 20px;
  line-height: 27px;
  letter-spacing: 2px;
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const ImageContainer = styled.div`
  left: 20px;
  position: absolute;
  top: -15px;
`;

export const CoverImage = styled.img`
  border-radius: 1px;
  box-shadow: 5px 7px 32px 0px #8caa3a31;
`;

export const Author = styled.div`
  color: #74776d;
  font-family: "Roboto", sans-serif;
  font-size: 10px;
  line-height: 11.72px;
`;

export const Content = styled.div`
  flex-grow: 1;
  margin-left: 130px;
  overflow: hidden;
  position: relative;
`;

export const PinkRectangle = styled.div`
  background: #ff6978;
  height: 4px;
  right: -22.8px;
  position: absolute;
  top: 70%;
  width: 46px;
  transform: rotate(14deg);
`;

export const TransparentCircle = styled.div`
  background: #d6d1b1;
  border-radius: 116px;
  height: 116px;
  right: -28px;
  position: absolute;
  opacity: 0.09;
  top: 30%;
  width: 116px;
`;

export const BlueOutlinedCircle = styled.div`
  border-radius: 18px;
  border: 2px solid #4550a7;
  height: 18px;
  right: 38%;
  position: absolute;
  top: -6px;
  width: 18px;
`;

export const BigOvalCircle = styled.img`
  top: -19px;
  height: 69px;
  right: -33px;
  position: absolute;
  width: 69px;
`;
