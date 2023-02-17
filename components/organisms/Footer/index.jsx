import { Box, Container, Stack, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box bg="white" zIndex="1" boxShadow="md">
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "row" }}
        spacing={4}
        justify={{ base: "space-between" }}
      >
        <Text color="mecord-main" textStyle="subtitle-small">
          © Test shop
        </Text>
        {/* <Stack direction={"row"} spacing={6}>
          <SocialButton label={"Twitter"} href={"#"}>
            <FaTwitter w={10} h={10} />
          </SocialButton>
          <SocialButton label={"Facebook"} href={"#"}>
            <FaFacebook />
          </SocialButton>
          <SocialButton label={"Instagram"} href={"#"}>
            <AiFillInstagram />
          </SocialButton>
        </Stack> */}
      </Container>
    </Box>
  );
}
