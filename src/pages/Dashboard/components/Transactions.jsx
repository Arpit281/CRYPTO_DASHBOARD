import {
  Button,
  Center,
  Divider,
  Flex,
  Grid,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { CustomCard } from "../../../chakra/CustomCard";
import { FaRupeeSign } from "react-icons/fa";
import { FaBtc } from "react-icons/fa";
import { Fragment } from "react";

const Transactions = () => {
  const transactions = [
    {
      id: 1,
      icon: FaRupeeSign,
      text: "INR Deposit",
      amount: "+81,123.10",
      timestamp: "2022-06-09 7:06 PM",
    },
    {
      id: 2,
      icon: FaBtc,
      text: "BTC sell",
      amount: "- 12.48513391 BTC",
      timestamp: "2022-06-09 7:32 PM",
    },
    {
      id: 3,
      icon: FaRupeeSign,
      text: "INR Deposit",
      amount: "+81,123.10",
      timestamp: "2022-06-09 7:06 PM",
    },
  ];

  return (
    <CustomCard h="full">
      <Text mb="6" fontSize="sm" color="black.80">
        Recent Transactions
      </Text>
      <Stack spacing={4}>
        {transactions.map((transaction, i) => (
          <Fragment key={transaction.id}>
            {i !== 0 && <Divider />}
            <Flex gap={4}>
              <Grid
                placeItems="center"
                bg="black.5"
                boxSize={10}
                borderRadius="full"
              >
                <Icon as={transaction.icon} />
              </Grid>
              <Flex justify="space-between" w="full">
                <Stack spacing={0}>
                  <Text textStyle="h6">{transaction.text}</Text>
                  <Text fontSize="sm" color="black.40">
                    {transaction.timestamp}
                  </Text>
                </Stack>
                <Text textStyle="h6">{transaction.amount}</Text>
              </Flex>
            </Flex>
          </Fragment>
        ))}
      </Stack>
      <Button mt="6" w="full" colorScheme="gray">
        View All
      </Button>
    </CustomCard>
  );
};

export default Transactions;
