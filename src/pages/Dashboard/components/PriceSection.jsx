import {
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { CustomCard } from "../../../chakra/CustomCard";
import { GoArrowUpRight } from "react-icons/go";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const PriceSection = () => {
  const timestamps = ["7:15 AM", "7:30 AM", "8:00 AM", "8:15 AM", "8:30 AM"];
  return (
    <CustomCard>
      <Flex justify="space-between" align="start">
        <Stack>
          <HStack color="black.80">
            <Text fontSize="14px">Current Price</Text>
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
              <HStack fontWeight="medium" color="green.500">
                <Icon as={GoArrowUpRight} />
                <Text
                  textStyle="h2"
                  color="p.black"
                  fontWeight="medium"
                  fontSize="sm"
                >
                  22%
                </Text>{" "}
              </HStack>
            </HStack>
          </HStack>
        </Stack>
        <HStack>
          <Button leftIcon={<Icon as={FaPlus} />}>Buy</Button>
          <Button leftIcon={<Icon as={FaMinus} />}>Sell</Button>
        </HStack>
      </Flex>
      <Tabs variant="soft-rounded">
        <Flex justify="end">
          {" "}
          <TabList
            _selected={{
              bg: "white",
            }}
            bg="black.5"
            p="3px"
          >
            {["1H", "1D", "1W", "1M"].map((tab) => (
              <Tab key={tab} fontSize="sm" p="6px" borderRadius="4">
                {tab}
              </Tab>
            ))}
          </TabList>
        </Flex>
        <TabPanels>
          <TabPanel>
            <Image w="100%" src="\Graph.png" mt="3rem" />
            <HStack justify="space-between">
              {timestamps.map((timestamp) => (
                <Text key={timestamp} fontSize="sm" color="black.80">
                  {timestamp}
                </Text>
              ))}
            </HStack>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </CustomCard>
  );
};

export default PriceSection;
