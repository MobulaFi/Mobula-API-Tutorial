import { Flex } from "@chakra-ui/react";

interface ContainerProps {
  children: React.ReactNode;
  [key: string]: any;
}

export const Container: React.FC<ContainerProps> = ({ children, ...props }) => (
  <Flex
    direction="column"
    mx="auto"
    w={["100%", "100%", "100%", "95%"]}
    maxW="1000px"
    mt="28px"
    {...props}
  >
    {children}
  </Flex>
);
