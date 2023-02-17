import { Box, Button, Center, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import NextImage from "../components/atoms/NextImage";
import NotFoundImg from "../public//img/404.svg";

const NotFound = () => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <Center h={"100vh"}>
      <VStack>
        <Box>
          <NextImage src={NotFoundImg} alt={"404 Not Found"} />
        </Box>
        <Text fontSize={"2xl"} fontWeight={"bold"}>
          404
        </Text>
        <Text fontSize={"lg"}>Sorry, the page you visited does not exist.</Text>
        <Button onClick={handleClick} variant="bluePrimary">
          Back Home
        </Button>
      </VStack>
    </Center>
  );
};

export default NotFound;
