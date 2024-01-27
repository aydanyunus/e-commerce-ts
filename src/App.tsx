import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import { Container } from "@mui/material";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

const App = () => {
  return (
    <>
      <ShoppingCartProvider>
        <Navbar />
        <Container maxWidth="xl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>
      </ShoppingCartProvider>
    </>
  );
};

export default App;
