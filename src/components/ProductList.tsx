import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useShoppingCart } from "../context/ShoppingCartContext";
import products from "../data/products.json";

type ProductListProps = {
  id: number;
  quantity: number;
};

const ProductList = ({ id, quantity }: ProductListProps) => {
  const { removeItem } = useShoppingCart();
  const item = products.find((i) => i.id === id);
  if (item === null) return null;
  return (
    <List component="nav" sx={{ width: "100%" }}>
      <Box>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <img
                  src={item?.imgUrl}
                  alt={item?.name}
                  style={{ width: 24, height: 24, marginRight: 16 }}
                />
              </ListItemIcon>
              <ListItemText
                primary={item?.name}
                secondary={`$${item?.price}`}
              />
              <Typography variant="body2" sx={{marginRight: "15px"}}>x{quantity}</Typography>

              <Typography variant="h6">${Number(item?.price) * quantity}</Typography>
              <IconButton onClick={() => removeItem(id)}>
                <DeleteIcon color="error" />
              </IconButton>
            </ListItemButton>
          </ListItem>
        </List>
        <Divider sx={{ my: 1 }} />
      </Box>
    </List>
  );
};

export default ProductList;
