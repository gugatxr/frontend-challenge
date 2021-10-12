import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: no-wrap;
  margin-top: 0.938rem;
  margin-left: -1.25rem;
  margin-right: -1.25rem;
  padding-left: 1.25rem;
  position: relative;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const BigOvalCover = styled.img`
  height: 11rem;
  position: absolute;
  right: -32%;
  transform: rotate(336deg);
  top: -6%;
  width: 11rem;
  z-index: 2;
`;
