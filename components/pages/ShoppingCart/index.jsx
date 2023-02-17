import { useDataShopping } from "@/store";
import {
  Button,
  Center,
  Flex,
  HStack,
  Spacer,
  Stack,
  Text,
  Thead,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Table,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";
import { useState } from "react";

const ShoppingCart = () => {
  const { dataChoose, setDataChoose } = useDataShopping((state) => state);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [successOrder, setSuccessOrder] = useState(false);

  console.log("in count", dataChoose);

  const handleCountPlus = (i) => {
    let count = [...dataChoose];
    count[i].qty += 1;
    setDataChoose(count);
  };

  const handleCountMin = (i) => {
    let count = [...dataChoose];
    count[i].qty -= 1;
    setDataChoose(count);
  };

  return (
    <Stack px={[10, null, 20]} py={[6, null, 10]} spacing="14">
      {successOrder ? (
        <Text>Yeay Order Berhasil</Text>
      ) : (
        <>
          {dataChoose.map((value, i) => (
            <Flex>
              <Text>{value.title}</Text>
              <Spacer />
              <HStack>
                <Button onClick={() => handleCountPlus(i)}>+</Button>
                <Text>{value.qty}</Text>
                <Button onClick={() => handleCountMin(i)}>-</Button>
              </HStack>
            </Flex>
          ))}
          <Center>
            <Button variant="bluePrimary" onClick={onOpen}>
              Review
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Table variant="transparent">
                    <Thead>
                      <Tr>
                        <Td
                          fontSize="md"
                          fontWeight="bold"
                          color="blue-primary"
                          px="0"
                        >
                          Name
                        </Td>
                        <Td
                          fontSize="md"
                          fontWeight="bold"
                          color="blue-primary"
                          px="0"
                        >
                          Qty
                        </Td>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {dataChoose.map((value) => (
                        <Tr key="">
                          <Td
                            fontSize="md"
                            fontWeight="bold"
                            color="blue-primary"
                            px="0"
                          >
                            {value.title}
                          </Td>
                          <Td
                            fontSize="md"
                            fontWeight="bold"
                            color="blue-primary"
                            px="0"
                          >
                            {value.qty}
                          </Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </ModalBody>

                <ModalFooter>
                  <Button
                    variant="bluePrimary"
                    onClick={() => setSuccessOrder(true)}
                  >
                    Order
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Center>
        </>
      )}
    </Stack>
  );
};

export default ShoppingCart;
