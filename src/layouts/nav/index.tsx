import { Flex, Link } from "@chakra-ui/react";
import { SmallFont } from "../../components/fonts";

export const Nav: React.FC = () => {
  return (
    <Flex align="center" w="fit-content" justify="space-between">
      <Link mx="10px" href="/">
        <SmallFont>MAIN</SmallFont>{" "}
      </Link>
      <Link mx="10px" href="/portfolio">
        <SmallFont>PORTFOLIO</SmallFont>{" "}
      </Link>
      <Link mx="10px" href="/wallet">
        <SmallFont>WALLET</SmallFont>{" "}
      </Link>
    </Flex>
  );
};
