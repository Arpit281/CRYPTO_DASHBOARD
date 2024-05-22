import { Box, Flex, Icon, Stack, Text } from "@chakra-ui/react";

const SupportCard = ({ leftcomponent, icon, title, text }) => {
  return (
    <Flex gap={6} flexDir={{ base: "column", xl: "row" }}>
      <Stack maxW="380px">
        <Icon boxSize={6} color="p.purple" as={icon}></Icon>
        <Text fontWeight="medium" as="h1" textStyle="h1">
          {" "}
          {title}
        </Text>
        <Text fontSize="sm" color="black.60" textStyle="h6">
          {" "}
          {text}
        </Text>
      </Stack>
      <Box maxW="730px" w="full">
        {" "}
        {leftcomponent}
      </Box>
    </Flex>
  );
};

export default SupportCard;
