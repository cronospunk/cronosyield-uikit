import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

export type CardHeaderProps = SpaceProps;

const CardHeader = styled.div<CardHeaderProps>`
  background: ${({ theme }) => theme.card.cardHeaderBackground};

  ${space}
`;

CardHeader.defaultProps = {
  p: "15px",
};

export default CardHeader;
