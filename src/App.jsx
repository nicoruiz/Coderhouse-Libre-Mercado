import NavBar from './components/NavBar';
import { ChakraProvider } from '@chakra-ui/react'
import ItemListContainer from './components/ItemListContainer';
import CartWidget from './components/CartWidget';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import ItemDetail from './components/ItemDetail';

function App() {
  return (

    <ChakraProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greetings={"Bienvenido a Libre Mercado!"}/>} />
          <Route path="/category/:categoryId" element={<ItemListContainer greetings={"Bienvenido a Libre Mercado!"} />} />
          <Route path="/item/:id" element={<ItemDetail />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
