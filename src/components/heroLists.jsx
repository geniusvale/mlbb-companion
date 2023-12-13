import { useEffect, useState } from "react";
import {
  Image,
  Card,
  CardBody,
  Heading,
  SimpleGrid,
  CardFooter,
  CardHeader,
} from "@chakra-ui/react";
import HeroStatsModal from "./heroStatsModal";
import api from "../api";

function HeroTable() {
  const [heroes, setHeroes] = useState([]);

  async function getAllHeroes() {
    try {
      const response = await api.get("/heroes");
      setHeroes(response.data["data"]);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllHeroes();
  }, []);

  return (
    <SimpleGrid
      spacing={10}
      templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
    >
      {heroes.map((hero, index) => {
        return (
          <Card align="center" key={index}>
            <CardHeader>
              <Image
                src={hero.key}
                alt="Hero Image"
                fallbackSrc="https://via.placeholder.com/150"
                boxSize="120px"
                borderRadius="full"
              />
            </CardHeader>
            <CardBody>
              <Heading>{hero.name}</Heading>
            </CardBody>
            <CardFooter>
              <HeroStatsModal heroName={hero.name} />
            </CardFooter>
          </Card>
        );
      })}
    </SimpleGrid>
  );
}

export default HeroTable;
