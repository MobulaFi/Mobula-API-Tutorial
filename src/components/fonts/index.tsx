import { Text } from "@chakra-ui/react";

interface FontProps {
  children: React.ReactNode;
  [key: string]: any;
}

export const SmallFont: React.FC<FontProps> = ({
  children,
  ...props
}: FontProps) => {
  return (
    <Text
      fontSize={["12px", "12px", "13px", "14px"]}
      color="white"
      mb="0px"
      fontWeight="500"
      {...props}
    >
      {children}
    </Text>
  );
};

export const MediumFont: React.FC<FontProps> = ({
  children,
  ...props
}: FontProps) => {
  return (
    <Text
      fontSize={["14px", "14px", "15px", "16px"]}
      color="white"
      mb="0px"
      fontWeight="500"
      {...props}
    >
      {children}
    </Text>
  );
};
