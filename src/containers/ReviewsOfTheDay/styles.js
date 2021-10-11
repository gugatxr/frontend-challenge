import styled from "styled-components";

export const Card = styled.div`
  background-color: #fff;
  border-radius: 5px;
  margin-top: 15px;
`;

export const ContentContainer = styled.div`
  padding: 15px 12px;
`;

export const Title = styled.h2`
  color: rgba(49, 49, 49, 0.8);
  font-size: 12px;
  margin-top: 0;
  margin-bottom: 6px;
`;

export const StatsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StatsText = styled.span`
  color: rgba(106, 103, 103, 0.8);
  font-family: "Roboto", sans-serif;
  font-size: 8px;
`;

export const StatsDivider = styled.div`
  background-color: #6a6767;
  height: 2px;
  width: 2px;
  margin: 0 10px;
`;

export const Description = styled.p`
  color: rgba(107, 107, 107, 0.8);
  font-family: "Roboto", sans-serif;
  font-size: 10px;
`;

export const Image = styled.img`
  max-width: 100%;
`;
