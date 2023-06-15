import NavBar from './components/NavBar';
import { ChakraProvider } from '@chakra-ui/react'
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <ChakraProvider>
      <>
        <NavBar />
        <ItemListContainer greetings={"Welcome!"} />
      </>
    </ChakraProvider>
  );
}

export default App;
