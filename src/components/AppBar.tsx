import { AppBar, Toolbar, Typography, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

const ButtonAppBar = () => {
  const productsList = useSelector((state: RootState) => state.products);
  const sum = useSelector((state: RootState) => state.sum);

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
