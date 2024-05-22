import {
  Button,
  Center,
  HStack,
  Icon,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaHandHoldingUsd } from "react-icons/fa";
import { FaWallet } from "react-icons/fa";

const PortfolioSection = () => {
  return (
    <HStack
      justify="space-between"
      bg="white"
      borderRadius="xl"
      p="6"
      align={{ base: "flex-start", xl: "center" }}
      flexDir={{ base: "column", xl: "row" }}
      spacing={{ base: 4, xl: 0 }}
    >
      <HStack
        spacing={{ base: 0, xl: 16 }}
        align={{ base: "flex-start", xl: "center" }}
        flexDir={{ base: "column", xl: "row" }}
      >
        <Stack>
          <HStack color="black.80">
            <Text fontSize="14px">Total Portfolio Value</Text>
            <Icon as={IoMdInformationCircleOutline} />
          </HStack>
          <Text textStyle="h2" color="p.black" fontWeight="medium">
            ₹ 112,312.24
          </Text>
        </Stack>
        <Stack>
          <HStack color="black.80">
            <Text fontSize="14px">Wallet Balance</Text>
          </HStack>
          <HStack
            spacing={4}
            align={{ base: "flex-start", sm: "center" }}
            flexDir={{ base: "column", sm: "row" }}
          >
            <HStack>
              <Text textStyle="h2" color="p.black" fontWeight="medium">
                22.39401000
              </Text>{" "}
              <Tag colorScheme="gray">BTC</Tag>
            </HStack>
            <HStack>
              <Text textStyle="h2" color="p.black" fontWeight="medium">
                ₹ 1,300.00
              </Text>{" "}
            </HStack>
            <Tag colorScheme="gray">INR</Tag>
          </HStack>
        </Stack>
      </HStack>
      <HStack>
        <Button leftIcon={<Icon as={FaHandHoldingUsd} />}>Deposit</Button>
        <Button leftIcon={<Icon as={FaWallet} />}>Withdraw</Button>
      </HStack>
    </HStack>
  );
};

export default PortfolioSection;
