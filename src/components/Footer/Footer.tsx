import React from "react";
import styled from "styled-components";
import { baseColors, darkColors, lightColors } from "../../theme/colors";
import { Flex, Box } from "../Box";
import { Link } from "../Link";
import {
  StyledFooter,
  StyledIconMobileContainer,
  StyledList,
  StyledListItem,
  StyledSocialLinks,
  StyledToolsContainer,
} from "./styles";
import Text from "../Text/Text";
import { FooterProps } from "./types";
// import CakePrice from "../CakePrice/CakePrice";
import { ArrowForwardIcon, SvgProps } from "../Svg";
import { Button } from "../Button";
import * as IconModule from "../../widgets/Menu/icons";
import { MENU_ENTRY_HEIGHT } from "../../widgets/Menu/config";
// import { Colors } from "../..";

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };
const { MoonIcon, SunIcon } = Icons;

const MenuItem: React.FC<FooterProps> = ({
  items,
  isDark,
  toggleTheme,
  // cakePriceUsd,
  buyCakeLabel,
  ...props
}) => {
  const SettingsEntry = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: ${MENU_ENTRY_HEIGHT}px;
    padding: 0 8px;
  `;
  return (
    <StyledFooter p={["40px 16px", null, "56px 40px 32px 40px"]} {...props} justifyContent="center">
      <Flex flexDirection="column" width={["100%", null, "1200px;"]}>
        <StyledIconMobileContainer display={["block", null, "none"]}>
          {/* <LogoWithTextIcon isDark width="130px" /> */}
        </StyledIconMobileContainer>
        <Flex
          order={[2, null, 1]}
          flexDirection={["column", null, "row"]}
          justifyContent="space-between"
          alignItems="flex-start"
          mb={["42px", null, "36px"]}
        >
          {items?.map((item) => (
            <StyledList key={item.label}>
              <StyledListItem>{item.label}</StyledListItem>
              {item.items?.map(({ label, href, isHighlighted = false }) => (
                <StyledListItem key={label}>
                  <Link
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    color={isHighlighted ? baseColors.warning : darkColors.text}
                  >
                    {label}
                  </Link>
                </StyledListItem>
              ))}
            </StyledList>
          ))}
          <Box display={["none", null, "block"]}>{/* <LogoWithTextIcon isDark width="160px" /> */}</Box>
        </Flex>
        <StyledSocialLinks order={[2]} pb={["42px", null, "32px"]} mb={["0", null, "32px"]} />
        <StyledToolsContainer
          order={[1, null, 3]}
          flexDirection={["column", null, "row"]}
          justifyContent="space-between"
        >
          <Flex order={[2, null, 1]} alignItems="center">
            <SettingsEntry>
              <Button variant="text" onClick={() => toggleTheme(!isDark)}>
                {/* alignItems center is a Safari fix */}
                <Flex alignItems="center">
                  <SunIcon color={isDark ? "textDisabled" : "text"} width="20px" />
                  <Text color="textDisabled" mx="4px">
                    /
                  </Text>
                  <MoonIcon color={isDark ? "text" : "textDisabled"} width="20px" />
                </Flex>
              </Button>
            </SettingsEntry>
          </Flex>
          <Flex order={[1, null, 2]} mb={["24px", null, "0"]} justifyContent="space-between" alignItems="center">
            <Box mr="20px">
              {/* <CakePrice cakePriceUsd={cakePriceUsd} color={darkColors.textSubtle as keyof Colors} /> */}
            </Box>
            <Button endIcon={<ArrowForwardIcon color={lightColors.backgroundAlt} />}>{buyCakeLabel}</Button>
          </Flex>
        </StyledToolsContainer>
      </Flex>
    </StyledFooter>
  );
};

export default MenuItem;
