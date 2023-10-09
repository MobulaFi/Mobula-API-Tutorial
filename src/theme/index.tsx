import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      fontFamily: "body",
      color: mode("rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 1)")(props),
      bg: mode("#111526", "#111526")(props),
      lineHeight: "base",
    },
    "*::placeholder": {
      color: mode("gray.400", "whiteAlpha.400")(props),
    },
    "*, *::before, &::after": {
      borderColor: mode("gray.200", "whiteAlpha.300")(props),
      wordWrap: "break-word",
    },
    colors: {
      bg: {
        main: "#111526",
      },
      border: "rgba(255,255,255,0.1)",
      text: {
        100: "rgba(255, 255, 255, 1)",
        80: "rgba(255, 255, 255, 0.8)",
      },
    },
  }),
};

export const theme = extendTheme({ styles });
