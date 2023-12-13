import React from "react";
import {  Center,  Square,  Circle,  VStack,  Container,  HStack, } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";

function Navbar() {
  return (
    <>
      <Container>
        <HStack spacing='24px'>
          <Button colorScheme="teal" variant="link"> Hero </Button>
          <Button colorScheme="teal" variant="link"> Role </Button>
          <Button colorScheme="teal" variant="link"> Specialization </Button>
        </HStack>
      </Container>
    </>
  );
}

export default Navbar;
