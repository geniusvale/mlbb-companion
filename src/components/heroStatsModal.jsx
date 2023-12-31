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
  Tooltip,
  Progress
} from "@chakra-ui/react";
import LoremIpsum from "react-lorem-ipsum";
import api from "../api";
import { useEffect, useState } from "react";

function HeroStatsModal({ heroName, heroId }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [heroData, setHeroData] = useState({});
  const [skills, setSkills] = useState([]);
  const [items, setItems] = useState([]);

  async function getHeroDetail() {
    onOpen();
    try {
      const response = await api.get(`/heroes/${heroId}`);
      setHeroData(response.data["data"]);
      setSkills(response.data["data"]["skill"]["skill"]);
      setItems(response.data["data"]["gear"]["out_pack"]);
      console.log(response.data["data"]["gear"]["out_pack"]["equip"]);
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
            <Heading as="h5" size="md" marginBottom="8px">
              Role/Lane
            </Heading>

            <Text marginBottom="32px">{heroData.type}</Text>

            <Heading as="h5" size="md" marginBottom="8px">
              Stats
            </Heading>
            <span>
              Magic
              <Progress hasStripe value={heroData.mag} marginBottom="16px"/>
            </span>
            <span>
              Physical Attack
              <Progress hasStripe value={heroData.phy} marginBottom="16px"/>
            </span>
            <span>
              Crowd Control
              <Progress hasStripe value={heroData.alive} marginBottom="16px"/>
            </span>
            <span>
              Difficulty
              <Progress hasStripe value={heroData.diff} marginBottom="16px"/>
            </span>
            
            <Heading as="h5" size="md" marginBottom="32px">
              Skills
            </Heading>

            {skills.map((data, index) => {
              return (
                <Box key={index} marginBottom="32px">
                  <Flex gap="4">
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

            <Heading as="h5" size="md" marginBottom="32px">
              Popular Build
            </Heading>

            <Box>
              <Flex justifyContent='center'>
                {items.map((data, index) => {
                  return (
                    <Tooltip label={data.equip.des} key={index} placement="top">
                      <Container centerContent>
                        <Image
                          src={data.equip.icon}
                          alt="Item"
                          fallbackSrc="https://via.placeholder.com/64"
                          boxSize="48px"
                          borderRadius="full"
                        />
                        <Text align='center'>{data.equip.name}</Text>
                      </Container>
                    </Tooltip>
                  );
                })}
              </Flex>
            </Box>
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
