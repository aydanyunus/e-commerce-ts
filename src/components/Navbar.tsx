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

const pages = ["home", "store", "about"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const { cartQuantity } = useShoppingCart();

  return (
    <>
      <AppBar position="relative" color="transparent">
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
                <ProductList />

                <Typography variant="h6" component="h6">
                  Total: $1
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
