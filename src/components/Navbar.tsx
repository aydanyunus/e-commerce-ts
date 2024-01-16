import {
  AppBar,
  Button,
  Toolbar,
  Box,
  Tooltip,
  IconButton,
  Container,
} from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const pages = ["home", "store", "about"];

const Navbar = () => {
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
                <IconButton>
                  <ShoppingCartIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
