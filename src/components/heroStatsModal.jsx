import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Heading,
  Text,
  Container,
  HStack,
  VStack,
  Image,
  Stack,
  Box,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import LoremIpsum from "react-lorem-ipsum";
import api from "../api";
import { useEffect, useState } from "react";

function HeroStatsModal({ heroName, heroId }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [heroData, setHeroData] = useState({});
  const [skills, setSkills] = useState([]);

  async function getHeroDetail() {
    onOpen();
    try {
      const response = await api.get(`/heroes/${heroId}`);
      console.log(response.data["data"]["skill"]);
      setHeroData(response.data["data"]);
      setSkills(response.data["data"]["skill"]["skill"]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Button onClick={getHeroDetail} colorScheme="yellow">
        Stats
      </Button>

      <Modal
        onClose={onClose}
        isOpen={isOpen}
        isCentered
        scrollBehavior="inside"
        size="xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{heroName}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Heading as='h5' size='md' marginBottom="32px">{heroData.type}</Heading>

            {skills.map((data, index) => {
              return (
                <Box key={index}>
                  <Flex gap="4" marginBottom="16px">
                    <Image
                      src={data.icon}
                      alt="Hero Skill"
                      fallbackSrc="https://via.placeholder.com/64"
                      boxSize="64px"
                      borderRadius="full"
                    />
                    <Box>
                      <Heading as="h5" size="sm">
                        {data.name}
                      </Heading>
                      <Text>{data.des}</Text>
                    </Box>
                  </Flex>
                </Box>
              );
            })}

          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default HeroStatsModal;
