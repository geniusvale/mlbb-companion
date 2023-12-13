import { useEffect, useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td, TableCaption, TableContainer, Image, } from "@chakra-ui/react";
import HeroStatsModal from "./heroStatsModal";
import api from "../api";

function HeroTable() {
  const [heroes, setHeroes] = useState([]);

  async function getAllHeroes() {
    try {
      const response = await api.get(
        "/heroes"
      );
      setHeroes(response.data['data']);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllHeroes();
  }, []);

  return (
    <TableContainer>
      <Table variant="striped">
        <TableCaption>List of Heroes</TableCaption>
        <Thead>
          <Tr>
            <Th>Id</Th>
            <Th>Name</Th>
            <Th>Avatar</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {heroes.map((hero, index) => {
            return (
              <Tr key={index}>
                <Td>{index+1}</Td>
                <Td>{hero.name}</Td>
                <Td>
                  <Image src={hero.key} alt="Hero Image" fallbackSrc='https://via.placeholder.com/150' boxSize='120px' borderRadius='full'/>
                </Td>
                <Td>
                  <HeroStatsModal heroName={hero.name}/>
                </Td>
              </Tr>
            );
          })
          }
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default HeroTable;
