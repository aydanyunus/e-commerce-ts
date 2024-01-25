import { Box, Container } from "@mui/material";
import ProductItems from "../components/ProductItems";
import products from "../data/products.json";

const Store = () => {
  return (
    <>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems:"center",
            flexWrap: "wrap",
            marginTop: 2          
          }}
        >
          {products?.map((product) => (
            <ProductItems {...product} key={product.id}/>
          ))}
        </Box>
      </Container>
    </>
  );
};

export default Store;
