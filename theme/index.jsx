import { extendTheme } from "@chakra-ui/react";
import Button from "./components/Button";
import colors from "./foundation/colors";

const theme = extendTheme({
  colors,
  components: {
    Button,
  },
});

export default theme;
