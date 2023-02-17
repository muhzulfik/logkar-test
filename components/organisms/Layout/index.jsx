import { Box, Flex } from "@chakra-ui/react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <Flex flexDirection="column" bg="white">
      <Navbar />
      <Box minHeight="100vh">{children}</Box>
      <Footer />
    </Flex>
  );
};

export default Layout;
