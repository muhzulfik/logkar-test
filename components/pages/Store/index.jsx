import { useDataShopping, useValidate } from "@/store";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Center,
  Divider,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";

const Store = () => {
  const router = useRouter();
  const { validateData } = useValidate((state) => state);
  const { dataChoose, setDataChoose } = useDataShopping((state) => state);
  const [dataFilm, setDataFilm] = useState();
  //   const [dataChoose, setDataChoose] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/films/")
      .then((res) => setDataFilm(res.data.results));
  }, []);

  const handleAdd = (data) => {
    console.log("ini merupakan data detail", data);
    let dataAdd = {
      title: data?.title,
      qty: 1,
    };
    setDataChoose([...dataChoose, dataAdd]);
  };

  const handleRemove = (i) => {
    setDataChoose(dataChoose.filter((item) => item !== dataChoose[i]));
    // console.log(bookingDataContainer);
  };

  //   console.log("ini merupakan dta choose", dataChoose);

  return (
    <Stack px={[10, null, 20]} py={[6, null, 10]} spacing="14">
      {validateData ? (
        <>
          {dataFilm ? (
            <SimpleGrid columns={2} spacing={10}>
              {dataFilm?.map((value, i) => (
                <Card maxW="sm">
                  <CardBody>
                    <Image
                      src={value.starships?.[0]}
                      alt="Green double couch with wooden legs"
                      borderRadius="lg"
                    />
                    <Stack mt="6" spacing="3">
                      <Heading size="md">{value.title}</Heading>
                    </Stack>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                    <ButtonGroup spacing="2">
                      <Button
                        variant="solid"
                        colorScheme="blue"
                        onClick={() => handleAdd(value)}
                      >
                        Add
                      </Button>
                      <Button
                        variant="solid"
                        colorScheme="blue"
                        onClick={() => handleRemove(i)}
                      >
                        Remove
                      </Button>
                    </ButtonGroup>
                  </CardFooter>
                </Card>
              ))}
            </SimpleGrid>
          ) : (
            <SimpleGrid columns={2} spacing={10}>
              <Skeleton>
                <div>contents wrapped</div>
                <div>won't be visible</div>
              </Skeleton>
              <Skeleton>
                <div>contents wrapped</div>
                <div>won't be visible</div>
              </Skeleton>
            </SimpleGrid>
          )}
        </>
      ) : (
        <Stack spacing="14">
          <Text fontSize="md" fontWeight="bold" color="blue-primary">
            You must complete your personal data on the home page before you can
            view the available items.
          </Text>
          <Center>
            <Button variant="bluePrimary" onClick={() => router.push("/")}>
              Back to Home Page
            </Button>
          </Center>
        </Stack>
      )}
    </Stack>
  );
};

export default Store;
