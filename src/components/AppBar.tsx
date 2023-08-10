import { AppBar, Toolbar, Typography, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { selectProducts } from "../app/cartSlice";
import { selectSum } from "../app/sumSlice";

const ButtonAppBar = () => {
  const productsList = useSelector(selectProducts);
  const sum = useSelector(selectSum);

  return (
    <>
      <AppBar component="nav">
        <Toolbar>
          <Badge
            badgeContent={productsList.length}
            color="warning"
            sx={{ marginRight: "auto", marginLeft: -0.5 }}
          >
            <ShoppingCartIcon color="action" />
          </Badge>
          <Typography variant="h6" component="div">
            סכום כולל: {sum.toFixed(2)}₪
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default ButtonAppBar;
