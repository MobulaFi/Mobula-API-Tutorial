import { Flex, Image } from "@chakra-ui/react";
import { Nav } from "../nav";

export const Header = () => {
  return (
    <Flex
      w="100%"
      h="80px"
      borderBottom="1px solid rgba(255,255,255,0.05)"
      justify="center"
    >
      <Flex
        w="100%"
        mx="20px"
        maxW="1000px"
        align="center"
        justify="space-between"
        h="100%"
      >
        <Image
          src="https://mobula.fi/mobula/mobula-logo-text.svg"
          w="120px"
          h="auto"
          alt="mobula logo"
        />
        <Nav />
      </Flex>
    </Flex>
  );
};
