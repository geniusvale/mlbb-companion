import { Container } from "@chakra-ui/react";
import HeroLists from "./components/heroLists";

function App() {
  return (
    <>
      <Container maxWidth='1280px'>
        <HeroLists />
      </Container>
    </>
  );
}

export default App;
