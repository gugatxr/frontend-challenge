import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.article`
  background-color: ${(props) => (props.active ? "#00173D" : "#451475")};
  border-radius: 5px;
  display: flex;
  font-size: ${(props) => (props.active ? "0.875rem" : "0.75rem")};
  color: #fefefe;
  flex-shrink: 0;
  justify-content: space-between;
  margin-right: 1.236rem;
  min-width: 17rem;
  overflow: hidden;
  ${(props) => props.active && "padding: 1.25rem;"}
  ${(props) => !props.active && "padding: 1.021rem;"}
  width: 80%;
`;

export const Title = styled.h1`
  font-family: Playfair Display;
  font-size: 1.929em;
  font-weight: 700;
  line-height: 2.25rem;
  letter-spacing: 0.125rem;
  margin-top: 0;
  margin-bottom: 0.3rem;
  position: relative;
  z-index: 3;
`;

export const Author = styled.h2`
  color: #e7e7e1;
  font-family: SFProDisplay;
  font-style: italic;
  font-size: 1em;
  font-weight: 300;
  line-height: 1rem;
  letter-spacing: 0.08rem;
  margin-top: 0;
  margin-bottom: 1.8rem;
  position: relative;
  z-index: 3;
`;

export const Footer = styled.footer`
  align-items: center;
  display: flex;
  position: relative;
  z-index: 3;
`;

export const ReadsCounterIcon = styled.img`
  margin-right: 0.125rem;
`;

export const ReadsCounter = styled.span`
  font-size: 0.625rem;
  font-weight: 700;
  margin-right: 0.125rem;
`;

export const ReadNowLink = styled(Link)`
  color: #e7e7e1;
  font-size: 0.625rem;
  font-weight: 400;
  text-decoration: none;
`;

export const ContentColumn = styled.div`
  position: relative;
`;

export const CoverColumn = styled.div``;

export const BigOvalCover = styled.img`
  bottom: -56%;
  height: 11rem;
  left: -5.277rem;
  position: absolute;
  transform: rotate(336deg);
  width: 11rem;
`;
