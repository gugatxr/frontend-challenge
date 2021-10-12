import styled from "styled-components";

export const Card = styled.div`
  background-color: #fff;
  border-radius: 5px;
  margin-top: 0.938rem;
`;

export const ContentContainer = styled.div`
  padding: 0.938rem 0.75rem;
`;

export const Title = styled.h2`
  color: rgba(49, 49, 49, 0.8);
  font-size: 0.75rem;
  margin-top: 0;
  margin-bottom: 0.375rem;
`;

export const StatsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StatsText = styled.span`
  color: rgba(106, 103, 103, 0.8);
  font-family: "Roboto", sans-serif;
  font-size: 0.5rem;
`;

export const StatsDivider = styled.div`
  background-color: #6a6767;
  height: 0.125rem;
  width: 0.125rem;
  margin: 0 0.625rem;
`;

export const Description = styled.p`
  color: rgba(107, 107, 107, 0.8);
  font-family: "Roboto", sans-serif;
  font-size: 0.625rem;
`;

export const Image = styled.img`
  width: 100%;
`;
