const { default: styled } = require("styled-components");

const ItemContainer = styled.a`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-decoration: none;

  svg .svg-fill {
    stroke: ${(props) => (props.active ? "#000" : "#BFBEBF")};
  }
`;

const ItemText = styled.span`
  color: ${(props) => (props.active ? "#313131" : "#BFBEBF")};
  font-family: SFProDisplay;
  font-size: 10px;
  margin-top: 10.22px;
`;

export { ItemContainer, ItemText };
