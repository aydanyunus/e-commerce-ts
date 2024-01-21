import { Box, Button, Typography } from "@mui/material";

type ProductItem = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};
const ProductItems = ({ id, name, price, imgUrl }: ProductItem) => {
  return (
    <>
      <Box
      key={id}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent:"space-between",
        border: "1px solid #ccc",
        padding: 2,
      }}
    >
      <img
        src={imgUrl}
        alt="Product"
        style={{ width: 200, height: 200, marginBottom: 8 }}
      />
      <Typography variant="subtitle1" align="center" gutterBottom>
        {name}
      </Typography>
      <Typography variant="subtitle1" align="center" gutterBottom>
        ${price}
      </Typography>
      <Button variant="contained" color="error" >
        remove
      </Button>
    </Box>
    </>
  );
};

export default ProductItems;
