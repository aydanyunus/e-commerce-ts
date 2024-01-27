import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import { useShoppingCart } from "../context/ShoppingCartContext";

type ProductItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};
const ProductItems = ({ id, name, price, imgUrl }: ProductItemProps) => {
  const {getItemQuantity, increaseCartQuantity}  = useShoppingCart()
  const quantity: number = getItemQuantity(id);
  return (
    <>
      <Card
        key={id}
        sx={{
          padding: 2,
          width: "100%",
          height: "630px",
          maxWidth: 300,
          marginBottom: 2,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <CardMedia
          component="img"
          width="100%"
          height="400px"
          image={imgUrl}
          alt={name}
          sx={{ objectFit: "cover", maxWidth:"100%", height:"400px" }}
        />
        <CardContent
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "10px",
            width: "100%",
          }}
        >
          <Typography gutterBottom variant="h6" component="h6">
            {name}
          </Typography>
          <Typography gutterBottom variant="h6" component="h6">
            ${price}
          </Typography>
        </CardContent>
        <CardActions>
          {quantity == 0 ? (
            <Button
              variant="contained"
              sx={{ fontSize: "16px", textTransform: "capitalize" }}
              onClick={()=>increaseCartQuantity(id)}
            >
              + Add to Cart
            </Button>
          ) : (
            <>
              <Button variant="contained" sx={{ fontSize: "18px" }}>
                -
              </Button>
              <Typography
                align="center"
                sx={{ fontSize: "18px" }}
                variant="body1"
              >
                <span style={{ marginRight: "5px" }}>{quantity}</span>in cart
              </Typography>
              <Button variant="contained" sx={{ fontSize: "18px" }} 
              onClick={()=>increaseCartQuantity(id)}
              >
                +
              </Button>
            </>
          )}
        </CardActions>
        <CardActions>
          <Button variant="contained" color="error">
            remove
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default ProductItems;
