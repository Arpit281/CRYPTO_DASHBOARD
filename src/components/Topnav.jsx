import {
  Box,
  Button,
  HStack,
  Heading,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

const Topnav = ({ title, onOpen }) => {
  return (
    <Box px="4" bg="white">
      <HStack maxW="70rem" h="16" justify="space-between" mx="auto">
        <Icon
          as={FaBars}
          onClick={onOpen}
          display={{ base: "block", lg: "none" }}
        />
        <Heading fontSize="28px" fontWeight="medium">
          {title}
        </Heading>
        <Menu>
          <MenuButton>
            <Icon as={FaUser} fontSize="24px" />
          </MenuButton>
          <MenuList>
            <MenuItem>Logout</MenuItem>
            <MenuItem>Support</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default Topnav;
