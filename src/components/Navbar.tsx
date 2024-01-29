import {
  AppBar,
  Button,
  Toolbar,
  Box,
  Tooltip,
  IconButton,
  Container,
  Divider,
  Drawer,
  Badge,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useState } from "react";
import ProductList from "./ProductList";
import { useShoppingCart } from "../context/ShoppingCartContext";
import products from "../data/products.json";

const pages = ["home", "store", "about"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const { cartQuantity, cartItems } = useShoppingCart();

  const totalPrice = cartItems.reduce((total, cartItem)=> {
    const selectedItem = products.find((item)=>item.id === cartItem.id)
    return total + (selectedItem?.price || 0) * cartItem.quantity
  },0)

  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: "#fff" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: "flex" }}>
              {pages?.map((page) => (
                <Button
                  key={page}
                  component={Link}
                  sx={{ my: 2, color: "gray", "&.active": { color: "black" } }}
                  to={page === "home" ? "/" : `/${page}`}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton
                  onClick={toggleDrawer}
                  color="primary"
                  aria-label="open drawer"
                >
                  <Badge
                    badgeContent={cartQuantity}
                    color="error"
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                  >
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
              </Tooltip>
            </Box>

            <Drawer open={open} anchor="right">
              <Toolbar
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  py: [2],
                  width: "350px",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h6" component="h6">
                    Cart
                  </Typography>

                  <IconButton onClick={toggleDrawer}>
                    <CloseOutlinedIcon />
                  </IconButton>
                </Box>
                <Divider />
                <Box sx={{ overflowY: "auto", flexGrow: 1, width:"100%" }}>
                  {cartItems?.map((item) => (
                    <ProductList {...item} key={item.id} />
                  ))}
                </Box>

                <Typography variant="h6" component="h6">
                  Total: ${totalPrice}                  
                </Typography>
              </Toolbar>
            </Drawer>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
