import { Flex, Link } from "@chakra-ui/react";
import { SmallFont } from "../../components/fonts";

export const Nav: React.FC = () => {
  return (
    <Flex align="center" w="fit-content" justify="space-between">
      <Link mx="10px" href="/">
        <SmallFont>PORTFOLIO</SmallFont>{" "}
      </Link>
    </Flex>
  );
};
