import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";

interface InputsProps {
  icon?: boolean;
  [key: string]: any;
}

export const Inputs: React.FC<InputsProps> = ({ icon, ...props }) => {
  return (
    <InputGroup
      h="45px"
      variant="unstyled"
      border="1px solid rgba(255,255,255,0.05)"
      borderRadius="8px"
      px="14px"
      bg="#151929"
    >
      <InputLeftElement>
        {icon ? <SearchIcon color="text.100" /> : null}
      </InputLeftElement>
      <Input variant="unstyled" _placeholder={{ opacity: 0.8 }} {...props} />
    </InputGroup>
  );
};
