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

const ProductList = () => {
  return (
    <List component="nav">
      <Box>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <img
                  src={"./"}
                  alt={"name"}
                  style={{ width: 24, height: 24, marginRight: 16 }}
                />
              </ListItemIcon>
              <ListItemText primary={"hello"} secondary={`$${2}`} />
              <Typography variant="body2">${2}</Typography>
              <IconButton>
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
