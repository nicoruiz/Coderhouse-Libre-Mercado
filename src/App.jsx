import NavBar from './components/NavBar';
import { ChakraProvider } from '@chakra-ui/react'
import ItemListContainer from './pages/ItemListContainer';
import ItemDetail from './pages/ItemDetail';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import CartContextProvider from './contexts/CartContext';
import Cart from './pages/Cart';

function App() {
  return (

    <ChakraProvider>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer greetings={"Bienvenido a Libre Mercado!"} />} />
            <Route path="/category/:categoryId" element={<ItemListContainer greetings={"Bienvenido a Libre Mercado!"} />} />
            <Route path="/item/:id" element={<ItemDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </ChakraProvider>
  );
}

export default App;
