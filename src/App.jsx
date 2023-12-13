import { VStack } from "@chakra-ui/react";
import Navbar from "./components/navbar";
import HeroTable from "./components/heroTable";

function App() {
  return (
    <>
      <VStack>
        <Navbar></Navbar>
        <HeroTable></HeroTable>
      </VStack>
    </>
  );
}

export default App;
