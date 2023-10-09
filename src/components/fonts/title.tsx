import { Text } from "@chakra-ui/react";

interface FontProps {
  children: React.ReactNode;
  [key: string]: any;
}

export const TitleFont: React.FC<FontProps> = ({
  children,
  ...props
}: FontProps) => {
  return (
    <Text
      fontSize={["18px", "18px", "20px", "22px"]}
      color="text.100"
      fontWeight="500"
      {...props}
    >
      {children}
    </Text>
  );
};
