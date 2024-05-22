import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";

const ContactCard = () => {
  return (
    <Card p={6} borderRadius="1rem" flexGrow={1}>
      <Stack spacing={6}>
        {" "}
        <Text fontSize="sm" fontWeight="medium">
          You will receive response within 24 hours of time of submit.
        </Text>
        <HStack flexDir={{ base: "column", md: "row" }}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input variant="outline" placeholder="James" />
          </FormControl>{" "}
          <FormControl>
            <FormLabel>Surname</FormLabel>
            <Input variant="outline" placeholder="Arthur" />
          </FormControl>
        </HStack>
        <FormControl>
          <FormLabel> E-mail </FormLabel>
          <Input variant="outline" placeholder="name@gmail.com" />
        </FormControl>
        <FormControl>
          <FormLabel>Message </FormLabel>
          <Textarea variant="outline" placeholder="Your message" />
        </FormControl>
        <Checkbox>
          <Text fontSize="xs">
            {" "}
            I agree with
            <Box as="span" color="p.purple">
              {" "}
              Terms & Conditions.
            </Box>
          </Text>
        </Checkbox>
        <Stack gap={4}>
          {" "}
          <Button fontSize="sm" color="white" bg="p.purple">
            Send a Message
          </Button>
          <Button fontSize="sm" color="black" bg="black.20">
            Book a meeting
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
};

export default ContactCard;
