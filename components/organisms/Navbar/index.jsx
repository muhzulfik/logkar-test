import { useDataShopping } from "@/store";
import {
  Text,
  Box,
  HStack,
  Container,
  Spacer,
  Badge,
  Flex,
} from "@chakra-ui/react";
import Link from "next/link";

export default function Navbar() {
  const { dataChoose, setDataChoose } = useDataShopping((state) => state);
  return (
    <Box zIndex="1" boxShadow="md">
      <Container as={HStack} maxW={"6xl"} py={4} spacing={12}>
        <Link href="/">
          <Text
            fontSize="sm"
            fontWeight="bold"
            color="blue-primary"
            cursor="pointer"
          >
            Home
          </Text>
        </Link>
        <Link href="/store">
          <Text
            fontSize="sm"
            fontWeight="bold"
            color="blue-primary"
            cursor="pointer"
          >
            Store
          </Text>
        </Link>
        <Link href="/shoppingcart">
          <HStack spacing="2">
            <Text
              fontSize="sm"
              fontWeight="bold"
              color="blue-primary"
              cursor="pointer"
            >
              Shopping Cart
            </Text>
            <Badge variant="subtle" colorScheme="green">
              {dataChoose.length}
            </Badge>
          </HStack>
        </Link>
        <Spacer />
        <Link href="/login">
          <Text
            fontSize="sm"
            fontWeight="bold"
            color="blue-primary"
            cursor="pointer"
          >
            Logout
          </Text>
        </Link>
      </Container>
    </Box>
  );
}
