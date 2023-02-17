import {
  Button,
  Center,
  FormControl,
  FormLabel,
  FormErrorMessage,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  Box,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useRouter } from "next/router";
import { validationLogin } from "@/utils/schema";
import { useLogin } from "@/store";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationLogin),
  });

  const router = useRouter();

  const { setUsername } = useLogin((state) => state);
  const [showPassword, setShowPassword] = useState(false);

  const handleOnSubmit = (data) => {
    console.log("ini merupakan data", data);
    setUsername(data.name);
    router.push("/");
  };

  const handleClick = () => setShowPassword(!showPassword);

  return (
    <Center height="xl">
      <Stack spacing="10">
        <Text
          fontWeight="bold"
          fontSize="2xl"
          textAlign="center"
          color="blue-primary"
        >
          LOGIN
        </Text>
        <form onSubmit={handleSubmit(handleOnSubmit)}>
          <Stack spacing="5">
            <FormControl isInvalid={errors.name}>
              <FormLabel>Username</FormLabel>
              <Input
                variant="white"
                boxShadow="base"
                placeholder="Input Name"
                {...register("name")}
              />
              <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.password}>
              <FormLabel>Password</FormLabel>
              <InputGroup size="md" boxShadow="base">
                <Input
                  variant="white"
                  placeholder="Input Password"
                  {...register("password")}
                  pr="4.5rem"
                  type={showPassword ? "text" : "password"}
                />
                <InputRightElement h={"full"}>
                  <IconButton
                    variant={"ghost"}
                    onClick={handleClick}
                    aria-label={""}
                  >
                    {showPassword ? (
                      <AiOutlineEye />
                    ) : (
                      <AiOutlineEyeInvisible />
                    )}
                  </IconButton>
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
            </FormControl>
            <Box alignSelf="center">
              <Button variant="bluePrimary" type="submit">
                Login
              </Button>
            </Box>
          </Stack>
        </form>
      </Stack>
    </Center>
  );
};

export default Login;
