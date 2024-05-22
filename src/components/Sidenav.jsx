import { Box, HStack, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { BiSupport } from "react-icons/bi";
import { MdWindow } from "react-icons/md";
import { TbArrowsDoubleNeSw } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";

const Sidenav = () => {
  const location = useLocation();

  const isActiveLink = (link) => {
    return location.pathname === link;
  };

  const navLinks = [
    { icon: MdWindow, text: "Dashboard", link: "/" },
    { icon: TbArrowsDoubleNeSw, text: "Transactions", link: "/transaction" },
  ];
  return (
    <Stack
      bg="white"
      boxShadow={{ base: "none", lg: "lg" }}
      w={{ base: "full", lg: "16rem" }}
      height="100vh"
      justify="space-between"
    >
      <Box>
        {" "}
        <Heading textAlign="center" fontSize="20px" as="h1" pt="56px">
          UPSTOX
        </Heading>
        <Box mx="12px" mt="6">
          {navLinks.map((nav) => (
            <Link to={nav.link} key={nav.text}>
              <HStack
                borderRadius="10px"
                py="3"
                px="4"
                bg={isActiveLink(nav.link) ? "#F3F3F7" : "transparent"}
                color={isActiveLink(nav.link) ? "#171717" : "#797E82"}
                _hover={{ bg: "#F3F3F7", color: "#171717" }}
              >
                <Icon as={nav.icon} />
                <Text fontSize="14px" fontWeight="medium">
                  {nav.text}
                </Text>
              </HStack>
            </Link>
          ))}
        </Box>
      </Box>

      <Box mx="12px" mt="6" mb="2">
        <Link to="/support">
          <HStack
            borderRadius="10px"
            py="3"
            px="4"
            bg={isActiveLink("/support") ? "#F3F3F7" : "transparent"}
            color={isActiveLink("/support") ? "#171717" : "#797E82"}
            _hover={{ bg: "#F3F3F7", color: "#171717" }}
            mb="6"
          >
            <Icon as={BiSupport} />
            <Text fontSize="14px" fontWeight="medium">
              Support
            </Text>
          </HStack>
        </Link>
      </Box>
    </Stack>
  );
};

export default Sidenav;
