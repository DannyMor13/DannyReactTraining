import { Box, AppBar, Toolbar, Typography, Avatar, Fade } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { cartCountStyle } from "./Styles/styles";
import { RootState } from "../app/store";

const ButtonAppBar = () => {
  const productsList = useSelector((state: RootState) => state.products);
  const sum = useSelector((state: RootState) => state.sum);

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" sx={{ zIndex: 1 }}>
        <Toolbar>
          <Box>
            <ShoppingCartIcon color="action" />
            <Fade
              in={productsList.length > 0}
              timeout={{ enter: 200, exit: 0 }}
              unmountOnExit
            >
              <Avatar sx={cartCountStyle}>{productsList.length}</Avatar>
            </Fade>
          </Box>
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
