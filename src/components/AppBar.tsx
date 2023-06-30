import { Box, AppBar, Toolbar, Typography, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

const ButtonAppBar = () => {
  const productsList = useSelector((state: RootState) => state.products);
  const sum = useSelector((state: RootState) => state.sum);

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" sx={{ zIndex: 1 }}>
        <Toolbar>
          <Badge badgeContent={productsList.length} color="warning">
            <ShoppingCartIcon color="action" />
          </Badge>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: "right" }}
          >
            סכום כולל: {sum.toFixed(2)}₪
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
};

export default ButtonAppBar;
